import {
  sortByIdServer,
  sortByPriceServer,
  sortBySizeServer,
  resetSortByServer
} from "../../../Actions/SortServerActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortById: () => {
      dispatch(sortByIdServer());
    },
    sortByPrice: () => {
      dispatch(sortByPriceServer());
    },
    sortBySize: () => {
      dispatch(sortBySizeServer());
    },
    resetSort: () => {
      dispatch(resetSortByServer());
    }
  };
};

export default mapDispatchToProps;
