const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // console.log('request');
    // response.end('hello node');
    const { url, method, headers } = request;
    if ((url === '/' || url === '/index.html') && method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/plain' });
                response.end('500服务器错误');
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                console.log(data)
                response.end(data);
            }
        });
    } else if (url === '/user' && method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ name: 'laowang' }));
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        console.log('headers:',headers);
        fs.createReadStream('./1.jpg').pipe(response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404')
    }

});

server.listen(3000);