import type { TrainingProduct as Product } from "./types";

interface Item {
  productId: Product["id"];
  quantity: number;
}

interface ItemMatched {
  item: Item;
  product: Product;
}

export const priceForProducts = (products: Product[], items: Item[]) => {
  let itemsMatched: ItemMatched[] = [];

  for (const item of items) {
    for (const product of products) {
      if (product.id === item.productId) {
        itemsMatched.push({
          item,
          product
        });
        break;
      }
    }
  }

  let total = 0;
  for (const { item, product } of itemsMatched) {
    const price = product.price * item.quantity;
    const discount = (price * product.discountPercentage) / 100;

    total += Math.round(price - discount);
  }

  return total;
};

/**
 * Tu trouveras une solution plus bas
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
 *
 *
 *
 *

    const reduction = (product: Product) =>
      Math.round((product.price * product.discountPercentage) / 100);

    const find = (products: Product[]) => (item: Item) => ({
      item,
      product: products.find((product) => product.id === item.productId)
    });

    const hasProduct = (candidate: any): candidate is ItemMatched =>
      candidate.product;

    const priceWithQuantity = ({ item, product }: ItemMatched) => ({
      ...product,
      price: product.price * item.quantity
    });

    const discounted = (product: Product) => product.price - reduction(product);

    const total = (sum: number, price: number) => sum + price;

    export const priceForProducts = (products: Product[], items: Item[]) =>
      items
        .map(find(products))
        .filter(hasProduct)
        .map(priceWithQuantity)
        .map(discounted)
        .reduce(total, 0);

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
 */
