import adsReducer, { defaultState } from "./adsReducer";
import { SET_ADS_LAST_ID } from "../Constants/ActionTypes";

describe("Test suits for ads reducer", () => {
  it("should equal to default state", () => {
    expect(adsReducer(undefined, {})).toEqual(defaultState);
  });
  it("it should has lastId of 10", () => {
    const obj = {
      ...defaultState,
      lastId: 10
    };
    expect(
      adsReducer(undefined, { type: SET_ADS_LAST_ID, payload: { lastId: 10 } })
    ).toEqual(obj);
  });
});
