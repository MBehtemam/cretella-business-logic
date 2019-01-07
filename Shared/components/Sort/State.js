const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    limit: state.limit,
    pagination: state.pagination,
    sortByOnServer: state.sortByOnServer
  };
};
export default mapStateToProps;
