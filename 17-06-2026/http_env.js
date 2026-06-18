const http = require('http');

const PORT = process.env.PORT || 8080;

// two ways 
// 1. dotenv
// 2. .env flag (we have to pass the .env file )


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('this is from server')
    }
})

server.listen(PORT, () => {
    console.log('server is running on ' + PORT);
})