const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.fetchStatus.isFetching
  };
};
export default mapStateToProps;
