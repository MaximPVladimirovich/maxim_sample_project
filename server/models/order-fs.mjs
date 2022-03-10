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

  async allOrders() {
    return await orders();
  }

  async countOrders() {
    const dir = orderDir();
    const files = await fs.readdir(dir);
    return files.length;
  }
}

async function orders() {
  const dir = await path.join(approotdir, 'ordersData');
  let folders = await fs.readdir(dir);
  if (!folders || folders === 'undefined') {
    folders = [];
  }
  let orderDirs = folders.map(async folder => {
    const folderpath = await path.join(dir, folder);
    folder = await fs.readdir(folderpath);
    let folderData = folder.map(async file => {
      let content = await fs.readFile(path.join(folderpath, file), 'utf8');
      return JSON.parse(content)
    })
    return Promise.all(folderData)
  })
  return Promise.all(orderDirs)
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

