const _ORDER_ID = Symbol('id');
const _ORDER_BUILDER_ID = Symbol('builder_id');
const _ORDER_ITEMS = Symbol('items');
const _ORDER_TOTAL_AMOUNT = Symbol('total_amount');

export class Order {
  constructor(id, builder_id, items, total_amount) {
    this[_ORDER_ID] = id;
    this[_ORDER_BUILDER_ID] = builder_id;
    this[_ORDER_ITEMS] = items;
    this[_ORDER_TOTAL_AMOUNT] = total_amount;
  }

  get id() {
    return this[_ORDER_ID];
  }

  get builderId() {
    return this[_ORDER_BUILDER_ID];
  }

  get orderItems() {
    return this[_ORDER_ITEMS];
  }

  get totalAmount() {
    return this[_ORDER_TOTAL_AMOUNT];
  }

  set id(order_id) {
    this[_ORDER_ID] = order_id;
  }

  set builderId(order_builder_id) {
    this[_ORDER_BUILDER_ID] = order_builder_id;
  }

  set orderItems(items) {
    this[_ORDER_ITEMS] = items;
  }

  set totalAmount(order_total_amount) {
    this[_ORDER_TOTAL_AMOUNT] = order_total_amount;
  }

  get orderJSON() {
    return JSON.stringify({
      id: this.id,
      builder_id: this.builder_id,
      items: this.items,
      total_amount: this.total_amount
    })
  }

  static parseOrderJSON(orderJSON) {
    const data = JSON.parse(orderJSON);
    if (typeof data !== 'object' || !data.hasOwnProperty('id') || typeof data.id !== 'string' || !data.hasOwnProperty('builder_id') || typeof data.builder_id !== 'string' || !data.hasOwnProperty('items') || typeof items !== 'object' || !data.hasOwnProperty('total_amount' || typeof data.totalAmount !== 'string')) {
      throw new Error(`Not a valid order ${orderJSON}`)
    }
    const order = new Order(data.id, data.builder_id, data.items, data.total_amount);
    return order
  }
}

export class AbstractNotesStore {
  async close() { }
  async update(id, builder_id, items, total_amount) { }
  async create(id, builder_id, items, total_amount) { }
  async read(id) { }
  async destroy(id) { }
  async keyList() { }
  async count() { }
}