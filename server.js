const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!');
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
