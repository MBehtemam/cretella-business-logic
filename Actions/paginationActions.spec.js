import { increasePagination, setPagination } from "./PaginationActions";
import {
  INCREASE_PAGINATION_PAGE_NUMBER,
  SET_PAGINATION_PAGE_NUMBER
} from "../Constants/ActionTypes";
describe("Test Suites for Increase Pagination", () => {
  it("should has correct type without payload", () => {
    expect(increasePagination()).toEqual({
      type: INCREASE_PAGINATION_PAGE_NUMBER
    });
  });
});

describe("Test Suites for Set Pagination", () => {
  it("should has correct type with payload 1", () => {
    expect(setPagination()).toEqual({
      type: SET_PAGINATION_PAGE_NUMBER,
      payload: {
        number: 1
      }
    });
  });
  it("should has correct type with payload 10", () => {
    expect(setPagination(10)).toEqual({
      type: SET_PAGINATION_PAGE_NUMBER,
      payload: {
        number: 10
      }
    });
  });
});
