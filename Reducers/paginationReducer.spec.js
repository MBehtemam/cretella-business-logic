import paginationReducer from "./paginationReducer";
import {
  INCREASE_PAGINATION_PAGE_NUMBER,
  SET_PAGINATION_PAGE_NUMBER
} from "../Constants/ActionTypes";

describe("Test suits for pagination page reducer ", () => {
  it("should has default page number of one", () => {
    expect(paginationReducer(undefined, {})).toBe(1);
  });
  it("should increase number to 2", () => {
    expect(
      paginationReducer(undefined, {
        type: INCREASE_PAGINATION_PAGE_NUMBER
      })
    ).toBe(2);
  });
  it("should has number of 10", () => {
    expect(
      paginationReducer(undefined, {
        type: SET_PAGINATION_PAGE_NUMBER,
        payload: { number: 10 }
      })
    ).toBe(10);
  });
});
