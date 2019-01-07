const mapStateToProps = (state, ownProps) => {
  return {
    limit: state.limitReducer,
    pagination: state.paginationReducer,
    sortByOnServer: state.sortyByOnServer
  };
};
export default mapStateToProps;
