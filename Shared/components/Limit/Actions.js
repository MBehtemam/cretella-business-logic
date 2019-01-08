import { setLimitProducts } from "../../../Actions/LimitActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLimitProducts: (page, limit, sortBy) => {
      dispatch(setLimitProducts(page, limit, sortBy));
    }
  };
};

export default mapDispatchToProps;
