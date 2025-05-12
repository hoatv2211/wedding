const http = require('http');
const fs = require('fs');
const path = require('path');

// Port mà server sẽ chạy
const PORT = process.env.PORT || 8080;

// Định nghĩa các loại MIME type cho các file khác nhau
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

// Tạo HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  // Xác định đường dẫn file cần phục vụ
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Lấy phần mở rộng của file và xác định content type
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Đọc file và trả về nội dung
  fs.readFile(filePath, (error, content) => {
    if (error) {
      // Nếu file không tồn tại
      if (error.code === 'ENOENT') {
        // Thử đọc index.html nếu không tìm thấy file
        fs.readFile('./index.html', (err, content) => {
          if (err) {
            // Nếu không tìm thấy index.html
            res.writeHead(404);
            res.end('File không tìm thấy');
          } else {
            // Trả về index.html
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Lỗi khác
        res.writeHead(500);
        res.end(`Lỗi server: ${error.code}`);
      }
    } else {
      // Thành công, trả về nội dung file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Khởi động server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server đang chạy tại http://0.0.0.0:${PORT}/`);
  console.log('Nhấn Ctrl+C để dừng server');
});