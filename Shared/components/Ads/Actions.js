import { getRandomAdsId } from "../../../Actions/AdsAction";
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getRandomAdsId: (adsIds, maxIdsHold) => {
      dispatch(getRandomAdsId(adsIds, maxIdsHold));
    }
  };
};

export default mapDispatchToProps;
