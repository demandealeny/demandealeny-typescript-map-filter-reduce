import { products } from "./data";
import { priceForProducts } from "./training";

const itemsBernard = [
  {
    productId: 83,
    quantity: 2
  }
];
const itemsBianca = [
  {
    productId: 97,
    quantity: 4
  },
  {
    productId: 59,
    quantity: 3
  }
];

describe("training", () => {
  it("priceForProducts of bernard", () => {
    expect(priceForProducts(products, itemsBernard)).toEqual(56);
  });

  it("priceForProducts of bianca", () => {
    expect(priceForProducts(products, itemsBianca)).toEqual(180);
  });
});
