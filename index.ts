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












const _total = (total: number, price: number) => price + total;
const _productTotal = (total: number, p: Product) => p.discountedPrice + total;
const _productsTotal = (cart: Cart) => cart.products.reduce(_productTotal, 0);

const _discountedTotal = (carts: Cart[], user: User) => {
  const _byUser = (cart: Cart) => cart.userId === user.id;

  return carts
    .filter(_byUser)
    .map(_productsTotal)
    .reduce(_total, 0);
};

















const discountedTotal = (carts: Cart[], user: User) => {
  let userCarts: Cart[] = [];

  for (const cart of carts) {
    if (cart.userId === user.id) {
      userCarts.push(cart);
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
