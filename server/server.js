const express = require('express');
const port = 3001;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const builders_data = require('./builders.json');
const orders_data = require('./orders.json');

function getBuilders() {
    return builders_data
}

function getOrders() {
    return orders_data;
}

class Database {
    constructor() {
        this.data = [];
    }
    set_data(array) {
        this.data = array;
    }

    add_item(item) {
        this.data.push(item);
    }
    get_size() {
        return this.data.length;
    }
}

const builders = new Database();
builders.set_data(getBuilders());

// Middleware 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.json(builders.data)
})

app.post('/', (req, res) => {
    console.log(req.body)
    // Sets id of builder.
    if (!req.body.builder.id) {
        req.body.builder.id = builders.get_size() + 1;
    }
    // Adds new builder to the list.
    builders.add_item(req.body.builder);
    res.send('Builder has been created.')
})

app.post('/neworder', (req, res) => {
    // Finds builder with an Id matching the builder_id in the Order coming through.
    let builder = builders.data.filter(builder => builder.id === req.body.order.builder_id)[0];
    // Creates order property if builde has none.
    let builder_orders = !builder.orders ? builder.orders = [] : builder.orders;
    builder_orders.push(req.body.order);
    res.send('Order has been placed.')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
