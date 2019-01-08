import { ADS_ADD_ID, ADS_CLEAR_IDS } from "../Constants/ActionTypes";
import GetRandomId from "../Helpers/GenerateRandomNumber";
export const getRandomAdsId = (adsIds, maxIdsHold) => {
  return dispatch => {
    if (adsIds.length >= maxIdsHold) {
      dispatch(clearAdsIds());
      const number = GetRandomId(1, 10, []);
      dispatch(addAdsId(number));
      return Promise.resolve(number);
    } else {
      const number = GetRandomId(1, 10, adsIds);
      dispatch(addAdsId(number));
      return Promise.resolve(number);
    }
  };
};
export const addAdsId = id => ({
  type: ADS_ADD_ID,
  payload: id
});
export const clearAdsIds = () => ({
  type: ADS_CLEAR_IDS
});
