import {
  sortByIdServer,
  sortByPriceServer,
  sortBySizeServer,
  resetSortByServer
} from "../../../Actions/SortServerActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortById: (page, limit) => {
      dispatch(sortByIdServer(page, limit));
    },
    sortByPrice: (page, limit) => {
      dispatch(sortByPriceServer(page, limit));
    },
    sortBySize: (page, limit) => {
      dispatch(sortBySizeServer(page, limit));
    },
    resetSort: () => {
      dispatch(resetSortByServer());
    }
  };
};

export default mapDispatchToProps;
