import fetchStatusReducer, { defaultState } from "./fetchStatusReducer";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  PRODUCTS_END_OF_PRODUCTS
} from "../Constants/ActionTypes";

describe("Tests for isFetching in Fetch Status Reducer", () => {
  it("should equal to default initial state", () => {
    expect(fetchStatusReducer(undefined, {}).isFetching).toEqual(false);
  });
  it("should has isFetching equal to true", () => {
    expect(
      fetchStatusReducer(defaultState, { type: FETCH_PRODUCTS_REQUEST })
        .isFetching
    ).toEqual(true);
  });
  it("Should has isFetching equal to false ", () => {
    expect(
      fetchStatusReducer(defaultState, { type: FETCH_PRODUCTS_SUCCESS })
        .isFetching
    ).toEqual(false);
  });
  it("should has isFetching equal to false", () => {
    expect(
      fetchStatusReducer(defaultState, { type: FETCH_PRODUCTS_FAILURE })
        .isFetching
    ).toEqual(false);
  });
});

describe("Test for endOfProducts in Fetch Status Reducer", () => {
  it("should equal to false in default state", () => {
    expect(fetchStatusReducer(undefined, {}).endOfProducts).toEqual(false);
  });
  it("should should has endOfProducts to true in fetch status", () => {
    expect(
      fetchStatusReducer(defaultState, { type: PRODUCTS_END_OF_PRODUCTS })
        .endOfProducts
    ).toEqual(true);
  });
});
