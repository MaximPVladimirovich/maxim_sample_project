import express from 'express';
import cors from 'cors';
import { getBuilders, addBuilder } from './builders.mjs';
import { router } from './routing/orders.mjs';

const port = 3001;
const app = express();

let b = getBuilders();

// Middleware 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/builders', (req, res) => {
    res.json(b)
})

app.post('/', (req, res) => {
    console.log(req.body)
    // Sets id of builder.
    // Adds new builder to the list.
    addBuilder(req.body);
    res.send('Builder has been created.')
})

app.use('/orders', router);
// app.post('/neworder', (req, res) => {
//     // Finds builder with an Id matching the builder_id in the Order coming through.
//     let builder = builders.data.filter(builder => builder.id === req.body.order.builder_id)[0];
//     // Creates order property if builde has none.
//     let builder_orders = !builder.orders ? builder.orders = [] : builder.orders;
//     builder_orders.push(req.body.order);
//     console.log(req.body.order);
//     res.send('Order has been placed.')
// })

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
