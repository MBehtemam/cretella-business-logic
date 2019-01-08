import { getRandomAdsId } from "../../../Actions/AdsAction";
const mapDispatchToProps = (dispatch, adsIndex) => {
  return {
    getRandomAdsId: adsIndex => {
      dispatch(getRandomAdsId(adsIndex));
    }
  };
};

export default mapDispatchToProps;
