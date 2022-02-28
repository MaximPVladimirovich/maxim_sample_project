const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const builders_data = require('./builders.json');

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
    get_size() {
        return this.data.length;
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
    // Sets id of builder.
    if (!req.body.id) {
        req.body.builder.id = builders.get_size() + 1;
    }
    // Adds new builder to the list.
    builders.add_builder(req.body.builder);
    res.send('Builder has been created.')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
