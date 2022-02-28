const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const builder_data = require('./builders.json');

// Middleware 
// const allowedOrigins = ['*']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (allowedOrigins.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.json(builder_data)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST request works!!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
