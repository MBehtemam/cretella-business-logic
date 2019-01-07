import GenerateRadnomNumber from "./GenerateRandomNumber";

describe("Test suits for geneartin random number", () => {
  it("should 4", () => {
    expect(GenerateRadnomNumber(1, 4, [1, 2, 3])).toBe(4);
  });
  it("should be 5", () => {
    expect(GenerateRadnomNumber(3, 7, [3, 4, 6, 7])).toBe(5);
  });
});
