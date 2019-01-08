import { ADS_ADD_ID, ADS_CLEAR_IDS } from "../Constants/ActionTypes";
export const defaultState = {
  adsPerProduct: 20,
  maxIdsHold: 10,
  IDs: []
};
const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADS_CLEAR_IDS: {
      return {
        ...state,
        IDs: []
      };
    }
    case ADS_ADD_ID: {
      return {
        ...state,
        IDs: [...state.IDs, action.payload]
      };
    }
    default:
      return state;
  }
};
export default adsReducer;
