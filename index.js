const http = require ('http');
const fs = require('fs');
// const express = require('express');
// const morgan = require('morgan')

const PORT = 3000;

// const app = express();

// app.use(morgan('dev'));

// app.get('/', (req, res) => {
//     res.send('Hello, Node.js!')
// })

// app.get('/file', (req, res, next) => {
//     fs.readFile('data.txt', 'utf-8', (err, data) => {
//         if(err) {
//             console.log(err);
//             return res.status(500).send('Error reading file');
//         }
//         res.send(data)
//     })

// })

// app.get('/api/user', (req, res) => {
//     const user = {
//         name: 'Blessing Sunday',
//         email: 'sundayn@gmail.com',
//         age: 24,
//     };
//     res.json(user);
// });

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    if(req.method === 'GET') {
        if( req.url === '/') {
            // Print Hello Nodejs to webpage
            // console.log('200, succeess');
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
        }else if(req.url === '/api/user') {
            const user = {
                name: 'Blessing Sunday',
                email: 'sundayn@gmail.com',
                age: 24,
            }
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(user))
        }
    }
});


server.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})