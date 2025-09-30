const fs = require('fs');
const path = require('path');

// Copy public assets to .next/static
const publicDir = path.join(__dirname, '../public');
const staticDir = path.join(__dirname, '../.next/static');

// Create static directory if it doesn't exist
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// Copy all files from public to static
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy public directory
copyRecursive(publicDir, staticDir);

console.log('Assets copied successfully!');
