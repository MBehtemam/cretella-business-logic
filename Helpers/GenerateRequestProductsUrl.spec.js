import { ServerMainUrl } from "../Constants/Constants";
import GenerateRequestProductsUrl from "./GenerateRequestProductsUrl";

describe("Test Suits for Generate Request Products Url", () => {
  it(`${ServerMainUrl}/api/products`, () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl)).toBe(
      `${ServerMainUrl}/api/products`
    );
  });
  it(`${ServerMainUrl}/api/products`, () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, null)).toBe(
      `${ServerMainUrl}/api/products`
    );
  });
  it(`${ServerMainUrl}/api/products?_page=10&_limit=15`, () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, 10, 15)).toBe(
      `${ServerMainUrl}/api/products?_page=10&_limit=15`
    );
  });
  it(`${ServerMainUrl}/api/products?_page=10&_limit=15&_sort=price`, () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, 10, 15, "price")).toBe(
      `${ServerMainUrl}/api/products?_page=10&_limit=15&_sort=price`
    );
  });
  it(`${ServerMainUrl}/api/products?_sort=price`, () => {
    expect(GenerateRequestProductsUrl(ServerMainUrl, null, null, "price")).toBe(
      `${ServerMainUrl}/api/products?_sort=price`
    );
  });
});
