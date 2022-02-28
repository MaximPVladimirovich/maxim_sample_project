const express = require('express');
const port = 3001;
const app = express();
const builder_data = require('./builders.json');

// Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    res.json(builder_data)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
