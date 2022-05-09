import type { MainOrder as Order, MainProduct as Product, User } from "./types";

console.clear();

export const discountedTotal = (orders: Order[], user: User) => {
  let userOrders: Order[] = [];

  for (const order of orders) {
    if (order.userId === user.id) {
      userOrders.push(order);
    }
  }

  let total = 0;

  for (const userOrder of userOrders) {
    for (const product of userOrder.products) {
      total += product.discountedPrice;
    }
  }

  return total;
};

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Filter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * https://github.com/lodash/lodash/blob/master/filter.js
 *
 * Map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * https://github.com/lodash/lodash/blob/master/map.js
 *
 * Reduce
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * https://github.com/lodash/lodash/blob/master/reduce.js
 */
