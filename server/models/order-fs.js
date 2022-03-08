import fs from 'fs';
import path from 'path';
import { approotdir } from '../approotdir';
import { Order, AbstractOrdersStore } from './Order';

export class FSOrderStore extends AbstractOrdersStore {
  async update(id, builder_id, items, total_amount) {
    return updateOrder(id, builder_id, items, total_amount);
  }

  async update(id, builder_id, items, total_amount) {
    return updateOrder(id, builder_id, items, total_amount);
  }

  async read(id) {
    const dir = await orderDir();
    const order = await readJson(dir, id);
    return order;
  }

  // Removes file.
  async delete(id) {
    // Set directory of orders.
    const dir = await orderDir();
    // Unlink will remove the filename with the id.
    await fs.unlink(filePath(dir, id));
  }
}

// Gets the directory od the order data.
async function orderDir() {
  const dir = path.join(approotdir, 'ordersData');
  await fs.ensureDir(dir);
  return dir;
}

// Retrieve order from directory and parse from json.
async function readJson(orderDir, id) {
  const readFrom = filePath(orderDir, id);
  const data = await fs.readFile(readFrom, 'utf8');
  return Order.parseOrderJSON(data);
}

// File path of an order.
const filePath = (orderDir, id) => path.join(orderDir, `${id}.json`);

// Updates or creates new order.
async function updateOrder(id, builder_id, items, total_amount) {
  const orderDirectory = await orderDir();
  const order = new Order(id, builder_id, items, total_amount);
  const writeDataTo = filePath(orderDirectory, id);
  const writeJsonTo = order.toJSON;
  await fs.writeFile(writeDataTo, writeJsonTo, 'utf8');
  return order;
}