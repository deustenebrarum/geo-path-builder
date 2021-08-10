const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(async (req, res) => {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let page = fs.readFileSync('./index.html', 'utf8');
    res.write(page);
    res.end();
  }
  else if (req.url == '/geo.json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let data = await fetch('https://waadsu.com/api/russia.geo.json');
    data = await data.json();
    res.write(data);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});