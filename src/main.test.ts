import { orders } from "./data";
import { ordersTotal } from "./main";

const bernard = {
  id: 83
};
const bianca = {
  id: 97
};

describe("main", () => {
  it("discountedTotal for bernard", () => {
    expect(ordersTotal(orders, bernard)).toEqual(1857);
  });

  it("discountedTotal for bianca", () => {
    expect(ordersTotal(orders, bianca)).toEqual(5351);
  });
});
