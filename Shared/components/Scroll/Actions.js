import { loadMoreProducts } from "../../../Actions/ProductsActions";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMoreProducts: () => {
      dispatch(loadMoreProducts());
    }
  };
};

export default mapDispatchToProps;
