import {
  ADS_ADD_BLACK_LIST_ID,
  ADS_CLEAR_BLACK_LIST_IDS,
  ADS_ADD_ID,
  ADS_ADD_BLACK_AND_WHITE_ID
} from "../Constants/ActionTypes";
export const defaultState = {
  adsPerProduct: 20,
  maxIdsHold: 10,
  blackListId: [],
  IDS: {}
};
const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADS_CLEAR_BLACK_LIST_IDS: {
      return {
        ...state,
        blackListId: []
      };
    }
    case ADS_ADD_BLACK_AND_WHITE_ID: {
      return {
        ...state,
        blackListId: [...state.IDs, action.payload.blackId],
        IDS: {
          [action.payload.index]: action.payload.whiteId
        }
      };
    }
    case ADS_ADD_BLACK_LIST_ID: {
      return {
        ...state,

        blackListId: [...state.IDs, action.payload],
        IDS: {
          ...state.IDS,
          [action.payload.index]: action.payload.whiteId
        }
      };
    }
    case ADS_ADD_ID: {
      return {
        ...state,
        IDS: {
          ...state.IDS,
          [action.payload.index]: action.payload.whiteId
        }
      };
    }
    default:
      return state;
  }
};
export default adsReducer;
