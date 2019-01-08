const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    pagination: state.pagination
  };
};
export default mapStateToProps;
