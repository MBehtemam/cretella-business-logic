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
