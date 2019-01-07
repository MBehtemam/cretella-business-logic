const mapStateToProps = (state, ownProps) => {
  return {
    limit: state.limit,
    pagination: state.pagination,
    sortByOnServer: state.sortByOnServer
  };
};
export default mapStateToProps;
