const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle requests here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Request handling error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', err => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

process.on('uncaughtException', err => {
  console.error('Uncaught exception:', err);
});