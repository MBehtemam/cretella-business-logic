import {
  SORT_BY_ID_SERVER,
  SORT_BY_PRICE_SERVER,
  SORT_BY_SIZE_SERVER,
  RESET_SORT_BY_SERVER
} from "../Constants/ActionTypes";

import sortByOnServerReducer from "./sortByOnServerReducer";

describe("Test suits for sort by on server reducer", () => {
  it("should return null for default state", () => {
    expect(sortByOnServerReducer(undefined, {})).toBe(null);
  });
  it("should equal to 'id' ", () => {
    expect(
      sortByOnServerReducer(undefined, {
        type: SORT_BY_ID_SERVER,
        payload: "id"
      })
    ).toBe("id");
  });
  it("should equal to 'price'", () => {
    expect(
      sortByOnServerReducer(undefined, {
        type: SORT_BY_PRICE_SERVER,
        payload: "price"
      })
    ).toBe("price");
  });
  it("should reset the state and equal to null", () => {
    expect(
      sortByOnServerReducer(undefined, { type: RESET_SORT_BY_SERVER })
    ).toBe(null);
  });
});
