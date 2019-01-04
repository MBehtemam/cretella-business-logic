import * as actions from "../Actions/SortActions";
import * as ActionTypes from "../Constants/ActionTypes";
describe("Sort by Id ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_ID_CLIENT_ASC
    };
    expect(actions.sortByIdASC()).toEqual(obj);
  });
});

describe("Sort by ID DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_ID_CLIENT_DESC
    };
    expect(actions.sortByIdDESC()).toEqual(obj);
  });
});

describe("Sort by Price ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_PRICE_CLIENT_ASC
    };
    expect(actions.sortByPriceASC()).toEqual(obj);
  });
});

describe("Sort by Price DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_PRICE_CLIENT_DESC
    };
    expect(actions.sortByPriceDESC()).toEqual(obj);
  });
});

describe("Sort by Size ASC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_SIZE_CLIENT_ASC
    };
    expect(actions.sortBySizeASC()).toEqual(obj);
  });
});

describe("Sort by Size DESC", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_SIZE_CLIENT_DESC
    };
    expect(actions.sortBySizeDESC()).toEqual(obj);
  });
});

describe("Reset Sort", () => {
  it("should has correct type", () => {
    const obj = {
      type: ActionTypes.SORT_BY_NO_SORT
    };
    expect(actions.noSort()).toEqual(obj);
  });
});
