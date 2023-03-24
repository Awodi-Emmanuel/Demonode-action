const { appendFile } = require('fs');
const http = require('http');
const path = require('path')


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.use(path.join(__dirname, '/build'))

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});