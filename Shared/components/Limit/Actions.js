import { setLimitProducts } from "../../../Actions/LimitActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLimitProducts: limit => {
      dispatch(setLimitProducts(limit));
    }
  };
};

export default mapDispatchToProps;
