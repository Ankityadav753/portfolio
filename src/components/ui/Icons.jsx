import React from 'react';

// Reusable SVG wrapper component
const SVG = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

export const GraduationCap = (props) => (
  <SVG {...props}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </SVG>
);

export const Award = (props) => (
  <SVG {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </SVG>
);

export const LaptopCode = (props) => (
  <SVG {...props}>
    <path d="M20 16V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16h16" />
    <path d="M2 20h20" />
    <path d="m9 10-2 2 2 2" />
    <path d="m15 14 2-2-2-2" />
    <path d="m12 9-1 6" />
  </SVG>
);

export const Smile = (props) => (
  <SVG {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </SVG>
);

export const Download = (props) => (
  <SVG {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </SVG>
);

export const Github = (props) => (
  <SVG {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </SVG>
);

export const ExternalLink = (props) => (
  <SVG {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </SVG>
);

export const Check = (props) => (
  <SVG {...props}>
    <path d="M20 6 9 17l-5-5" />
  </SVG>
);

export const Menu = (props) => (
  <SVG {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </SVG>
);

export const X = (props) => (
  <SVG {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </SVG>
);

export const Linkedin = (props) => (
  <SVG {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </SVG>
);

export const Envelope = (props) => (
  <SVG {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </SVG>
);

export const ReactIcon = (props) => (
  <SVG {...props}>
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
  </SVG>
);

export const JavaScriptIcon = (props) => (
  <SVG {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 13v2c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-4" />
    <path d="M15 11v5" />
  </SVG>
);

export const GitIcon = (props) => (
  <SVG {...props}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" x2="6" y1="9" y2="15" />
  </SVG>
);

export const Leetcode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0 0 1.95l1.378 1.379a1.38 1.38 0 0 0 1.951 0l9.778-9.778a1.381 1.381 0 0 0 0-1.95L14.456.414A1.372 1.372 0 0 0 13.483 0zm-7.47 12.658c-.379-.379-.613-.9-.613-1.478s.234-1.099.613-1.478l3.41-3.41a1.378 1.378 0 1 1 1.95 1.951l-2.434 2.434h8.309a1.38 1.38 0 1 1 0 2.76h-8.309l2.434 2.435a1.377 1.377 0 0 1-.975 2.35 1.372 1.372 0 0 1-.975-.4l-3.41-3.411z" />
  </svg>
);

export const Cpp = (props) => (
  <SVG {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M14 9.025a3.5 3.5 0 1 0 0 5.95" />
    <path d="M17 12h4" />
    <path d="M19 10v4" />
  </SVG>
);

export const ChevronUp = (props) => (
  <SVG {...props}>
    <polyline points="18 15 12 9 6 15" />
  </SVG>
);

export const Briefcase = (props) => (
  <SVG {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </SVG>
);

export const Calendar = (props) => (
  <SVG {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </SVG>
);

export const MapMarker = (props) => (
  <SVG {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </SVG>
);

export const Phone = (props) => (
  <SVG {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </SVG>
);

export const PaperPlane = (props) => (
  <SVG {...props}>
    <line x1="22" x2="11" y1="2" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </SVG>
);

export const Codeforces = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <rect x="2" y="10" width="4" height="12" rx="1" />
    <rect x="9" y="4" width="4" height="18" rx="1" />
    <rect x="16" y="7" width="4" height="15" rx="1" />
  </svg>
);

export const ArrowRight = (props) => (
  <SVG {...props}>
    <line x1="5" x2="19" y1="12" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </SVG>
);

export const Brain = (props) => (
  <SVG {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
  </SVG>
);

export const Code = (props) => (
  <SVG {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </SVG>
);

