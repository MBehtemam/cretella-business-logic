import {
  sortByIdServer,
  sortByPriceServer,
  sortBySizeServer
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
    }
  };
};

export default mapDispatchToProps;
