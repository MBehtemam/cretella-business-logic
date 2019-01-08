import { initialProducts } from "../../../Actions/ProductsActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialProducts: () => {
      dispatch(initialProducts());
    }
  };
};

export default mapDispatchToProps;
