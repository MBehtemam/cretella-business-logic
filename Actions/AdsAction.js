import {
  ADS_ADD_BLACK_LIST_ID,
  ADS_CLEAR_BLACK_LIST_IDS,
  ADS_ADD_ID,
  ADS_ADD_BLACK_AND_WHITE_ID
} from "../Constants/ActionTypes";
import GetRandomId from "../Helpers/GenerateRandomNumber";
export const getRandomAdsId = adsIndex => {
  return (dispatch, getState) => {
    const { ads } = getState();
    if (ads.blackListId.length >= ads.maxIdsHold) {
      dispatch(clearBlackListAdsIds());
      const number = GetRandomId(1, 10, []);
      dispatch(addAdsBlackAndWhiteId(number, adsIndex, number));
    } else {
      const number = GetRandomId(1, 10, ads.blackListId);
      dispatch(addAdsBlackAndWhiteId(number, adsIndex, number));
    }
  };
};
export const addBlackListAdsId = id => ({
  type: ADS_ADD_ID,
  payload: id
});
export const clearBlackListAdsIds = () => ({
  type: ADS_CLEAR_BLACK_LIST_IDS
});
export const addAdsBlackAndWhiteId = (whiteId, whiteIndex, blackId) => ({
  type: ADS_ADD_BLACK_AND_WHITE_ID,
  payload: {
    index: whiteIndex,
    whiteId,
    blackId
  }
});
