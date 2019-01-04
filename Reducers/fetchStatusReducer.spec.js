import fetchStatusReducer, { defaultState } from "./fetchStatusReducer";
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST
} from "../Constants/ActionTypes";

describe("Tests for Fetch Status Reducer", () => {
  it("should equal to default initial state", () => {
    expect(fetchStatusReducer(undefined, {})).toEqual(defaultState);
  });
  it("should has isFetching equal to true", () => {
    const newState = {
      ...defaultState,
      isFetching: true
    };
    expect(
      fetchStatusReducer(defaultState, { type: FETCH_PRODUCTS_REQUEST })
    ).toEqual(newState);
  });
});
