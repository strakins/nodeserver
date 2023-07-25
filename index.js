const http = require ('http');
const fs = require('fs')

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        if( req.url === '/') {
            // Print Hello Nodejs to webpage
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end('Hello, Node.js!')
        }else if(req.url === '/file') {
            fs.readFile('data.txt', 'utf-8', (err, data) => {
                if(err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Internal Server Error');
                }else {
                    res.writeHead(200, { 'Content-Type': 'text/plain'});
                    res.end(data)
                }
            })
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})