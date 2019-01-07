const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (page, limit, sortBy) => {
      dispatch(sortByServer(page, limit, sortBy));
    }
  };
};

export default mapDispatchToProps;
