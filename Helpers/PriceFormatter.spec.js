import PriceFormatter from "./PriceFormatter";

describe("Price Formatter", () => {
  it("should return $3.51", () => {
    expect(PriceFormatter(351)).toBe("$3.51");
  });

  it("should return $1.51", () => {
    expect(PriceFormatter(151)).toBe("$1.51");
  });

  it("should return $22.23", () => {
    expect(PriceFormatter(2223)).toBe("$22.23");
  });
  it("should return $0.15", () => {
    expect(PriceFormatter(15)).toBe("$0.15");
  });
  it("should return $0.00", () => {
    expect(PriceFormatter(0)).toBe("$0.00");
  });
});
