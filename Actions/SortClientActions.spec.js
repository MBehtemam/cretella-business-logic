import * as actions from "./SortClientActions";
import * as ActionTypes from "../Constants/ActionTypes";
describe("Sort by Id ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_ID_CLIENT_ASC
    };
    expect(actions.sortByIdClientASC()).toEqual(obj);
  });
});

describe("Sort by ID DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_ID_CLIENT_DESC
    };
    expect(actions.sortByIdClientDESC()).toEqual(obj);
  });
});

describe("Sort by Price ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_PRICE_CLIENT_ASC
    };
    expect(actions.sortByPriceClientASC()).toEqual(obj);
  });
});

describe("Sort by Price DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_PRICE_CLIENT_DESC
    };
    expect(actions.sortByPriceClientDESC()).toEqual(obj);
  });
});

describe("Sort by Size ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_SIZE_CLIENT_ASC
    };
    expect(actions.sortBySizeClientASC()).toEqual(obj);
  });
});

describe("Sort by Size DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_SIZE_CLIENT_DESC
    };
    expect(actions.sortBySizeClientDESC()).toEqual(obj);
  });
});

describe("Reset Sort", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_NO_SORT
    };
    expect(actions.resetSortClient()).toEqual(obj);
  });
});
