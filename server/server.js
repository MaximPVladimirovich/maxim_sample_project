const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const builders_data = require('./builders.json');
const fs = require('fs');

function getBuilders() {
    return builders_data
}

class Database {
    constructor() {
        this.data = [];
    }
    set_builders(array) {
        this.data = array;
    }

    add_builder(builder) {
        this.data.push(builder);
    }
}

const builders = new Database();
builders.set_builders(getBuilders());

// Middleware 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.json(builders.data)
})

app.post('/', (req, res) => {
    builders.add_builder(req.body);
    console.log(builders)
    res.send('POST request works!!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
