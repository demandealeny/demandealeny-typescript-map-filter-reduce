import orders from "./orders";
import type { Order, Product } from "./orders";

console.clear();

interface User {
  id: number;
}

const bernard: User = {
  id: 83,
};
const bianca = {
  id: 97,
};

const _total = (total: number, price: number) => price + total;
const _productTotal = (total: number, p: Product) => p.discountedPrice + total;
const _productsTotal = (order: Order) => order.products.reduce(_productTotal, 0);

const _discountedTotal = (orders: order[], user: User) => {
  const _byUser = (order: Order) => order.userId === user.id;

  return orders.filter(_byUser).map(_productsTotal).reduce(_total, 0);
};

const discountedTotal = (orders: Order[], user: User) => {
  let userOrders: Order[] = [];

  for (const Order of orders) {
    if (Order.userId === user.id) {
      userorders.push(Order);
    }
  }

  if (!userorders.length) return 0;

  let total = 0;

  for (const userOrder of userOrders) {
    for (const product of userOrder.products) {
      total += product.discountedPrice;
    }
  }

  return total;
};

const resultBianca = discountedTotal(orders, bianca);
const resultBernard = discountedTotal(orders, bernard);

console.log("Bianca paid", resultBianca);
console.log("Bernard paid", resultBernard);
