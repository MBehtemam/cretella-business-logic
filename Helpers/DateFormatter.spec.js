import DateFormatter from "./DateFormatter";

describe("Date Formatter Suit Test", () => {
  it("it should be today", () => {
    expect(DateFormatter(new Date().toString())).toBe("today");
  });
  it("it shoud be 1 days ago", () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    expect(DateFormatter(d.toString())).toBe("1 days ago");
  });

  it("should be 7 days ago", () => {
    const d = new Date();
    d.setDate(d.getDate() - 7);
    expect(DateFormatter(d.toString())).toBe("7 days ago");
  });
});
