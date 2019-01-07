import ProductReformer from "./ProductReformer";

describe("Tests for Product Reformer", () => {
  it("should be price to $0.10", () => {
    const obj = {
      id: "38789-urd78xj3qi",
      size: 14,
      price: 10,
      face: "ヾ(´￢｀)ﾉ",
      date: "Mon Jan 07 2019 05:11:56 GMT+0330 (Iran Standard Time)"
    };
    expect(ProductReformer(obj).price).toBe("$0.10");
  });
});
