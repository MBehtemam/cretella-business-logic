import {
  PRELOADED_PRODUCTS_CLEAR_LIST,
  PRELOADED_PRODUCTS_SET
} from "../Constants/ActionTypes";
import preloadedProductsReducer from "./preloadedProductsReducer";
describe("Test suits for Preloaded products", () => {
  it("should has empty array", () => {
    expect(preloadedProductsReducer(undefined, {}).length).toBe(0);
  });
  it("should has empty array", () => {
    expect(
      preloadedProductsReducer(undefined, {
        type: PRELOADED_PRODUCTS_CLEAR_LIST
      }).length
    ).toBe(0);
  });
  it("should has  array with 2 item", () => {
    expect(
      preloadedProductsReducer(undefined, {
        type: PRELOADED_PRODUCTS_SET,
        payload: ["item1", "item2"]
      }).length
    ).toBe(2);
  });
});
