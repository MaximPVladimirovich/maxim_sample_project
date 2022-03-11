import express from 'express';
import cors from 'cors';
import { router as orderRouter } from './routing/orders.mjs';
import { router as indexRouter } from './routing/index.mjs';

const port = 3001;
const app = express();

// Middleware 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/', indexRouter)
app.use('/orders', orderRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
