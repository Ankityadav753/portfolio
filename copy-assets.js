import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcImage = 'C:\\Users\\ankit\\.gemini\\antigravity-ide\\brain\\220a7974-1ee6-44d5-a83e-4aa20f4ed72b\\media__1785256930340.jpg';
const srcPdf = 'C:\\Users\\ankit\\Desktop\\Ankit F Resume.pdf';

const destImage = path.join(__dirname, 'public', 'profile.jpg');
const destPdf = path.join(__dirname, 'public', 'resume.pdf');

// Ensure public directory exists
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'));
}

try {
  if (fs.existsSync(srcImage)) {
    fs.copyFileSync(srcImage, destImage);
    console.log('Successfully copied profile image to public/profile.jpg');
  } else {
    console.error('Source image not found at ' + srcImage);
  }

  if (fs.existsSync(srcPdf)) {
    fs.copyFileSync(srcPdf, destPdf);
    console.log('Successfully copied resume PDF to public/resume.pdf');
  } else {
    console.error('Source PDF not found at ' + srcPdf);
  }
} catch (err) {
  console.error('Error copying assets:', err);
}
