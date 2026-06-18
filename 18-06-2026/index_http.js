const http = require('http');
require('dotenv').config({
    path: '.env.prod'
});

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('hello from server')
    } else if(req.url === "/api"){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('hello from server')
    } if(req.url === "/hello"){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('hello from server')
    }
});

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})