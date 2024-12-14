const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace single-level routes
  content = content.replace(/href="\/(\w+)"/g, 'href="$1.html"');
  
  // Replace multi-level routes
  content = content.replace(/href="\/(\w+)\/(\w+)\/(\w+)"/g, 'href="$1-$2-$3.html"');
  content = content.replace(/href="\/(\w+)\/(\w+)"/g, 'href="$1-$2.html"');
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (path.extname(file) === '.html') {
      processFile(filePath);
    }
  });
}

// Rename files to match new route structure
function renameFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      renameFiles(filePath);
      // Remove empty directories
      if (fs.readdirSync(filePath).length === 0) {
        fs.rmdirSync(filePath);
      }
    } else if (path.extname(file) === '.html') {
      const newName = file.replace(/\//, '-');
      fs.renameSync(filePath, path.join(directory, newName));
    }
  });
}

processDirectory(outDir);
renameFiles(outDir);
console.log('Route processing complete.');