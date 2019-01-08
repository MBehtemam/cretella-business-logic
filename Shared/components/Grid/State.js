const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
    pagination: state.pagination,
    ads: state.ads
  };
};
export default mapStateToProps;
