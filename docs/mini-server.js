// Simple HTTP Server to serve static files
const http = require('http');
const fs = require('fs');
const path = require('path');

// Port for the server
const PORT = 3000;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Log each request
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Handle root path by serving index.html
  let filePath = req.url === '/' ? './index.html' : '.' + req.url;
  
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
        fs.readFile('./index.html', (err, content) => {
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
  console.log(`Server is running at http://0.0.0.0:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});