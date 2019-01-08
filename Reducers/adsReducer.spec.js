import adsReducer, { defaultState } from "./adsReducer";
import {
  ADS_ADD_BLACK_AND_WHITE_ID,
  ADS_ADD_ID,
  ADS_ADD_BLACK_LIST_ID,
  ADS_CLEAR_BLACK_LIST_IDS
} from "../Constants/ActionTypes";

describe("Test suits for ads reducer", () => {
  it("should equal to default state", () => {
    expect(adsReducer(undefined, {})).toEqual(defaultState);
  });
  it("should has empty black list", () => {
    expect(
      adsReducer(undefined, { type: ADS_CLEAR_BLACK_LIST_IDS }).blackListId
        .length
    ).toBe(0);
  });
  it("should has id of `ads10` on Ids", () => {
    expect(
      Object.keys(
        adsReducer(undefined, {
          type: ADS_ADD_BLACK_AND_WHITE_ID,
          payload: {
            whiteIndex: "ads10",
            whiteId: 10,
            blackId: 10
          }
        }).IDS
      )
    ).toContain("ads10");
  });
});
