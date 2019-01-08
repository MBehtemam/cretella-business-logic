const mapStateToProps = (state, ownProps) => {
  return {
    endOfProducts: state.fetchStatus.endOfProducts
  };
};
export default mapStateToProps;
