import express from 'express';
import FSOrdersStore from '../models/order-fs.mjs';
import { approotdir } from '../approotdir.mjs';
export const router = express.Router();

let orders = new FSOrdersStore();
router.get('/', async (req, res, next) => {
  try {
    const result = await orders.allOrders();
    res.send(result)
  } catch (error) {
    next(error);
  }
})

router.post('/neworder', async (req, res, next) => {
  try {
    let order;
    order = await orders.create(req.body.id, req.body.builder_id, req.body.items, req.body.total_amount);
    res.redirect('/builders');
  } catch (error) {
    next(error)
  }
})