import fs from 'fs-extra';
import path from 'path';
import { approotdir } from '../approotdir.mjs';
import { Order, AbstractOrdersStore } from './Order.mjs';
import Debug from 'debug';

const debug = Debug('server:order-fs');

export default class FSOrdersStore extends AbstractOrdersStore {
  async update(id, builder_id, items, total_amount) {
    return updateOrder(id, builder_id, items, total_amount);
  }

  async create(id, builder_id, items, total_amount) {
    return createOrder(id, builder_id, items, total_amount);
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

  async orderList() {
    const dir = await orderDir();
    let files = await fs.readdir(dir);
    if (!files || files === 'undefined') {
      files = []
    }
    const orders = files.map(async file => {
      const id = path.basename(file, '.json');
      const order = await readJson(dir, id);
      return order.id
    })
    return Promise.all(orders)
  }

  async builderOrders(id) {
    const dir = await orderDir();
    let files = await fs.readdir(dir);
    if (!files || files === 'undefined') {
      files = [];
    }

    const orders = files.filter(async file => {
      const order = await readJson(dir, id);
      return order.builder_id === id
    })
    return Promise.all(orders);
  }
  async orders() {
    const dir = await orderDir();
    let files = await fs.readdir(dir);
    if (!files || files === 'undefined') {
      files = []
    }
    const orders = files.map(async file => {
      const id = path.basename(file, '.json');
      const order = await readJson(dir, id);
      return order
    })
    return Promise.all(orders)
  }

  async countOrders() {
    const dir = orderDir();
    const files = await fs.readdir(dir);
    return files.length;
  }
}

// Gets the directory od the order data.
async function orderDir(builder_id) {
  const dir = path.join(approotdir, `ordersData/${builder_id}`);
  await fs.ensureDir(dir);
  return dir;
}

// File path of an order.
const filePath = (orderDir, id) => path.join(orderDir, `${id}.json`);

// Retrieve order from directory and parse from json.
async function readJson(orderdir, id) {
  const readFrom = filePath(orderdir, id);
  const data = await fs.readFile(readFrom, 'utf8');
  return Order.parseOrderJSON(data);
}

// Updates or creates new order.
async function createOrder(id, builder_id, items, total_amount) {
  const orderDirectory = await orderDir(builder_id);
  const order = new Order(id, builder_id, items, total_amount);
  const writeDataTo = filePath(orderDirectory, id);
  const writeJsonTo = order.toJSON;
  await fs.writeFile(writeDataTo, writeJsonTo, 'utf8');
  return order;
}

