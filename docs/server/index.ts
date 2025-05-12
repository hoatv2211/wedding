// Simple HTTP Server to serve static files
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Port for the server
const PORT = 5000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Log each request
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Handle root path by serving index.html
  let filePath = req.url === '/' ? path.join(rootDir, 'index.html') : path.join(rootDir, req.url || '');
  
  // Get file extension to set content type
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  
  // Set appropriate content type based on file extension
  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If file not found
      if (err.code === 'ENOENT') {
        // Try to serve index.html for SPA routing
        fs.readFile(path.join(rootDir, 'index.html'), (err, content) => {
          if (err) {
            res.writeHead(404);
            res.end('404 - Page Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Wedding Website Server is running at http://0.0.0.0:${PORT}/`);
  console.log('Access the beautiful wedding website for Trần Hòa & Kim Ngân');
  console.log('Press Ctrl+C to stop the server');
});