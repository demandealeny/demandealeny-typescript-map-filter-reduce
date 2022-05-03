import carts from "./carts";
import type { Cart, Product } from "./carts";

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
const total = (total: number, price: number) => price + total;
const productTotal = (total: number, p: Product) => p.discountedPrice + total;
const productsTotal = (cart: Cart) => cart.products.reduce(productTotal, 0);

const discountedTotal = (carts: Cart[], user: User) => {
  const byUser = (cart: Cart) => cart.userId === user.id;

  return carts
    .filter(byUser)
    .map(productsTotal)
    .reduce(total, 0);
};

const _discountedTotal = (carts: Cart[], user: User) => {
  let userCarts: Cart[] = [];

  for (const candidate of carts) {
    if (candidate.userId === user.id) {
      userCarts.push(candidate);
    }
  }

  if (!userCarts.length) return 0;

  let total = 0;

  for (const userCart of userCarts) {
    for (const product of userCart.products) {
      total += product.discountedPrice;
    }
  }

  return total;
};
const resultBianca = discountedTotal(carts, bianca);
const resultBernard = discountedTotal(carts, bernard);

console.log("Bianca paid", resultBianca);
console.log("Bernard paid", resultBernard);
