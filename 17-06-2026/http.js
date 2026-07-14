const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // configure our home route
    if(req.url === "/" && req.method === "GET"){
        res.statusCode = 200;
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end('this is from server')
    }  else if(req.url === "/" && req.method === "POST"){
        res.writeHead(200, {'Content-type': 'application/json'});
        const data = [
            {
                name: 'nodejs',
                age: 12
            }
        ]
        res.end(JSON.stringify(data))
    } else if(req.url === "/html" && req.method === "GET"){
        res.writeHead(200, {'Content-type': 'text/html'});
        const data = fs.readFileSync('index.html', 'utf-8')
        res.end(data)
    } else if(req.url === "/pdf" && req.method === "GET"){
        const filePath = path.join(__dirname, 'sample.pdf');
        res.writeHead(200, {
            'Content-Type':'application/pdf',
            // 'Content-Disposition':'inline; filname="document.pdf" '
            'Content-Disposition':'attachment; filname="nodejs.pdf" '
        });

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res)
    } else if(req.url === "/image" && req.method === "GET"){
        const filePath = path.join(__dirname, 'images.jpeg');
        res.writeHead(200, {
            'Content-Type':'image/jpeg'
        });

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res)
    }
});

server.listen(5000, () => {
    console.log(`server is running on 5000`)
})