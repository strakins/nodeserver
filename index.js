const http = require ('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end('Hello, Node.js!')
    }
});

server.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})