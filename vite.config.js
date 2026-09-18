import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Automatically copy assets from the brain directory to the public directory when Vite starts
const srcImage = 'C:\\Users\\ankit\\.gemini\\antigravity-ide\\brain\\220a7974-1ee6-44d5-a83e-4aa20f4ed72b\\media__1785256930340.jpg'
const srcPdf = 'C:\\Users\\ankit\\.gemini\\antigravity-ide\\brain\\220a7974-1ee6-44d5-a83e-4aa20f4ed72b\\media__1785256908483.pdf'

const destImage = path.resolve('public/profile.jpg')
const destPdf = path.resolve('public/resume.pdf')

// Ensure the public directory exists
const publicDir = path.resolve('public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

try {
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage)
    console.log('Automatically copied profile image to public/profile.jpg')
  } else {
    console.warn('Source profile image not found at:', srcImage)
  }

  if (fs.existsSync(srcPdf)) {
    fs.copyFileSync(srcPdf, destPdf)
    console.log('Automatically copied resume PDF to public/resume.pdf')
  } else {
    console.warn('Source resume PDF not found at:', srcPdf)
  }
} catch (err) {
  console.error('Error copying assets during Vite initialization:', err)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
