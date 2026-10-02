import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './Developer3DBackground.css';

/**
 * Circular Particle Disc Texture Generator
 */
function createParticleTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255, 247, 238, 1)');
  grad.addColorStop(0.2, 'rgba(228, 154, 90, 0.85)');
  grad.addColorStop(0.6, 'rgba(200, 117, 61, 0.35)');
  grad.addColorStop(1, 'rgba(200, 117, 61, 0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

/**
 * Detects the highest supported WebGL context type safely.
 */
function detectSupportedWebGLType() {
  try {
    const c2 = document.createElement('canvas');
    const gl2 = c2.getContext('webgl2', { failIfMajorPerformanceCaveat: false });
    if (gl2 && typeof gl2.getParameter === 'function' && gl2.getContextAttributes()) return 'webgl2';
  } catch {}

  try {
    const c1 = document.createElement('canvas');
    const gl1 = c1.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||
                c1.getContext('experimental-webgl', { failIfMajorPerformanceCaveat: false });
    if (gl1 && typeof gl1.getParameter === 'function' && gl1.getContextAttributes()) return 'webgl';
  } catch {}

  return null;
}

export const Developer3DBackground = () => {
  const canvasRef = useRef(null);
  const [isWebGLSupported, setIsWebGLSupported] = useState(() => Boolean(detectSupportedWebGLType()));
  const [isWebGLReady, setIsWebGLReady] = useState(false);

  // Background Image Fallback Hierarchy:
  // 1. /hero-bg.jpg (PRIMARY - User's exact 3D developer environment)
  // 2. /aesthetic-nature-bg.jpg (FALLBACK)
  const [activeBgUrl, setActiveBgUrl] = useState('/hero-bg.jpg');

  useEffect(() => {
    let isMounted = true;
    const testImg = new Image();
    testImg.src = '/hero-bg.jpg';

    testImg.onload = () => {
      if (isMounted) {
        setActiveBgUrl('/hero-bg.jpg');
      }
    };

    testImg.onerror = () => {
      // Graceful fallback if primary asset fails to load
      const fallback = new Image();
      fallback.src = '/aesthetic-nature-bg.jpg';
      fallback.onload = () => {
        if (isMounted) setActiveBgUrl('/aesthetic-nature-bg.jpg');
      };
    };

    return () => {
      isMounted = false;
    };
  }, []);

  // Subtle Three.js Interactive Particles & Depth Layer
  useEffect(() => {
    if (!isWebGLSupported || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let animationFrameId = null;
    let renderer = null;
    let isDisposed = false;

    let handlePointerMove = null;
    let handleScroll = null;
    let handleResize = null;
    let handleVisibilityChange = null;
    let handleMotionChange = null;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    handleMotionChange = (e) => {
      prefersReducedMotion = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    let isMobile = window.innerWidth < 768;

    const disposables = {
      geometries: [],
      materials: [],
      textures: []
    };

    const registerGeometry = (geom) => {
      disposables.geometries.push(geom);
      return geom;
    };

    const registerMaterial = (mat) => {
      disposables.materials.push(mat);
      return mat;
    };

    const registerTexture = (tex) => {
      disposables.textures.push(tex);
      return tex;
    };

    try {
      const currentType = detectSupportedWebGLType();
      if (!currentType) {
        setIsWebGLSupported(false);
        setIsWebGLReady(false);
        return;
      }

      // 1. Scene
      const scene = new THREE.Scene();

      // 2. Camera
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 8.4);

      // 3. Renderer (Transparent so the primary image shines through directly)
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: isMobile ? 'default' : 'high-performance'
      });
      const dprCap = isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dprCap);
      renderer.setSize(window.innerWidth, window.innerHeight);

      const handleContextLost = (e) => {
        e.preventDefault();
        setIsWebGLSupported(false);
        setIsWebGLReady(false);
      };
      canvas.addEventListener('webglcontextlost', handleContextLost, false);

      // 4. Subtle Ambient Lighting
      const ambientLight = new THREE.AmbientLight(0xE49A5A, 0.6);
      scene.add(ambientLight);

      // 5. Subtle Perspective Ground Grid (Parallax Depth)
      const gridHelper = new THREE.GridHelper(28, 28, 0xC8753D, 0x4A2818);
      gridHelper.position.set(0, -3.2, -3.0);
      const gridMat = gridHelper.material;
      gridMat.transparent = true;
      gridMat.opacity = 0.12;
      scene.add(gridHelper);

      // 6. Floating Ambient Constellation Particles
      const particleCount = isMobile ? 55 : 120;
      const particleGeometry = registerGeometry(new THREE.BufferGeometry());
      const particlePositions = new Float32Array(particleCount * 3);
      const particleVelocities = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);

      const colorPalette = [
        new THREE.Color(0xE49A5A), // Warm Amber
        new THREE.Color(0xC8753D), // Terracotta
        new THREE.Color(0xF5E6D3), // Cream
        new THREE.Color(0xA85D32)  // Mountain Ochre
      ];

      for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 24;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;

        particleVelocities[i * 3] = (Math.random() - 0.5) * 0.002;
        particleVelocities[i * 3 + 1] = Math.random() * 0.003 + 0.001; // gentle upward drift
        particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

        const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particleColors[i * 3] = col.r;
        particleColors[i * 3 + 1] = col.g;
        particleColors[i * 3 + 2] = col.b;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

      const particleTex = registerTexture(new THREE.CanvasTexture(createParticleTexture()));
      const particleMaterial = registerMaterial(new THREE.PointsMaterial({
        size: isMobile ? 0.28 : 0.38,
        map: particleTex,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }));

      const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particlePoints);

      // 7. Mouse Parallax & Scroll Depth
      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;

      handlePointerMove = (e) => {
        if (prefersReducedMotion) return;
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = (e.clientY / window.innerHeight) * 2 - 1;
        targetMouseX = normX;
        targetMouseY = normY;
      };

      let scrollRatio = 0;
      handleScroll = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        scrollRatio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      };

      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });

      // 8. Viewport Resize Handler
      handleResize = () => {
        if (!renderer || !canvas) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        isMobile = width < 768;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5));
      };
      window.addEventListener('resize', handleResize);

      // 9. Page Visibility Handling
      let isTabVisible = !document.hidden;
      handleVisibilityChange = () => {
        isTabVisible = !document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // 10. Animation Loop
      let clock = new THREE.Clock();
      let hasRenderedFirstFrame = false;

      const animate = () => {
        if (isDisposed) return;
        animationFrameId = requestAnimationFrame(animate);

        if (!isTabVisible) return;

        clock.getDelta(); // tick clock

        // Smooth mouse damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.04;
        currentMouseY += (targetMouseY - currentMouseY) * 0.04;

        // Subtle camera parallax without displacing the background image
        camera.position.x = currentMouseX * 0.35;
        camera.position.y = -currentMouseY * 0.25;
        camera.lookAt(0, 0, 0);

        // Grid parallax response to scroll
        gridHelper.position.z = -3.0 - scrollRatio * 2.5;

        // Ambient constellation particle drift
        if (!prefersReducedMotion) {
          const positions = particleGeometry.attributes.position.array;
          for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 1] += particleVelocities[i * 3 + 1];
            positions[i * 3] += particleVelocities[i * 3];

            if (positions[i * 3 + 1] > 8) {
              positions[i * 3 + 1] = -8;
            }
            if (positions[i * 3] > 14) {
              positions[i * 3] = -14;
            } else if (positions[i * 3] < -14) {
              positions[i * 3] = 14;
            }
          }
          particleGeometry.attributes.position.needsUpdate = true;
        }

        renderer.render(scene, camera);

        if (!hasRenderedFirstFrame) {
          hasRenderedFirstFrame = true;
          setIsWebGLReady(true);
        }

        if (prefersReducedMotion) {
          cancelAnimationFrame(animationFrameId);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

    } catch (err) {
      console.warn('WebGL Initialization encountered an issue, falling back to static background:', err);
      setIsWebGLSupported(false);
      setIsWebGLReady(false);
    }

    return () => {
      isDisposed = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleMotionChange) motionQuery.removeEventListener('change', handleMotionChange);
      if (handlePointerMove) window.removeEventListener('pointermove', handlePointerMove);
      if (handleScroll) window.removeEventListener('scroll', handleScroll);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (handleVisibilityChange) document.removeEventListener('visibilitychange', handleVisibilityChange);

      disposables.geometries.forEach((g) => g.dispose());
      disposables.materials.forEach((m) => {
        if (Array.isArray(m)) m.forEach((mat) => mat.dispose());
        else m.dispose();
      });
      disposables.textures.forEach((t) => t.dispose());

      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }
    };
  }, [isWebGLSupported]);

  return (
    <div className="developer-3d-root" aria-hidden="true">
      {/* 1. EXACT Primary Background Image (Software Developer 3D Environment) */}
      <div
        className="developer-3d-primary-bg"
        style={{ backgroundImage: `url('${activeBgUrl}')` }}
      />

      {/* 2. Deep Cinematic Ambient Vignette & Subtle Dark Espresso Scrim */}
      <div className="developer-3d-vignette" />

      {/* 3. Subtle Interactive Three.js Particle Depth Layer */}
      {isWebGLSupported && (
        <canvas
          ref={canvasRef}
          className={`developer-3d-canvas ${isWebGLReady ? 'ready' : 'loading'}`}
        />
      )}
    </div>
  );
};

export default Developer3DBackground;
