import limitReducer from "./limitReducer";
import { SET_LIMIT_PRODUCTS } from "../Constants/ActionTypes";

describe("Tests for Limit Reducer", () => {
  it("should has default value of 20", () => {
    expect(limitReducer(undefined, {})).toBe(20);
  });
  it("should has value of 40", () => {
    expect(
      limitReducer(undefined, { type: SET_LIMIT_PRODUCTS, payload: 40 })
    ).toBe(40);
  });
});
