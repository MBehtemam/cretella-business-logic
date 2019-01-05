import {
  SORT_BY_ID_SERVER,
  SORT_BY_PRICE_SERVER,
  SORT_BY_SIZE_SERVER,
  RESET_SORT_BY_SERVER
} from "../Constants/ActionTypes";

const sortByOnServer = (state = null, action) => {
  switch (action.type) {
    case SORT_BY_ID_SERVER: {
      return action.payload;
    }
    case SORT_BY_PRICE_SERVER:
      return action.payload;
    case SORT_BY_SIZE_SERVER:
      return action.payload;
    case RESET_SORT_BY_SERVER:
      return null;
    default:
      return state;
  }
};
export default sortByOnServer;
