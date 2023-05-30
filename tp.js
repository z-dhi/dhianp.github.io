const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (path === '/') {
    const radius = query.radius;

    if (radius === undefined) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Silahkan berikan parameter radius. \n');
    } else {
      const area = Math.PI * radius ** 2;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Error : Tugas pengembangan web Dhian Prameswari \n`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Terjadi Error, silahkan coba kembali.\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
