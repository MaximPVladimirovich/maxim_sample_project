import express from 'express';
import { addBuilder, getBuilders } from '../builders.mjs';
import { approotdir } from '../approotdir.mjs';
export const router = express.Router();

let b = getBuilders();
// Routing
router.get('/builders', (req, res) => {
  res.json(b)
})

router.post('/', (req, res) => {
  addBuilder(req.body);
  res.send('Builder has been created.')
})