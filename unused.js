// const express = require('express');
// const morgan = require('morgan')


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
