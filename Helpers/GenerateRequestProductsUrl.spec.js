import { ServerMainUrl } from "../Constants/Constants";
import GenerateRequestProductsUrl from "./GenerateRequestProductsUrl";

describe("Test Suits for Generate Request Products Url", () => {
  it("http://localhost:3000/api/products", () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl)).toBe(
      `http://localhost:3000/api/products`
    );
  });
  it("http://localhost:3000/api/products", () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, null)).toBe(
      `http://localhost:3000/api/products`
    );
  });
  it("http://localhost:3000/api/products?_page=10&_limit=15&", () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, 10, 15)).toBe(
      `http://localhost:3000/api/products?_page=10&_limit=15&`
    );
  });
  it("http://localhost:3000/api/products?_page=10&_limit=15&_sort=price", () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, 10, 15, "price")).toBe(
      `http://localhost:3000/api/products?_page=10&_limit=15&_sort=price`
    );
  });
});
