import { SET_ADS_LAST_ID } from "../Constants/ActionTypes";
export const defaultState = {
  adsPerProduct: 20,
  lastId: -1
};
const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ADS_LAST_ID: {
      return {
        ...state,
        lastId: action.payload.lastId
      };
    }
    default:
      return state;
  }
};
export default adsReducer;
