import type { MainOrder as Order, MainProduct as Product, User } from "./types";

export const discountedTotal = (orders: Order[], user: User) => {
  let userOrders: Order[] = [];

  for (const Order of orders) {
    if (Order.userId === user.id) {
      userOrders.push(Order);
    }
  }

  if (!userOrders.length) return 0;

  let total = 0;

  for (const userOrder of userOrders) {
    for (const product of userOrder.products) {
      total += product.discountedPrice;
    }
  }

  return total;
};
