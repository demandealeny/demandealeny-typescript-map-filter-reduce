import { orders } from "./data";
import { discountedTotal } from "./main";

const bernard = {
  id: 83
};
const bianca = {
  id: 97
};

describe("main", () => {
  it("discountedTotal for bernard", () => {
    expect(discountedTotal(orders, bernard)).toEqual(1641);
  });

  it("discountedTotal for bianca", () => {
    expect(discountedTotal(orders, bianca)).toEqual(4566);
  });
});
