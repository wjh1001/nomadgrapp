import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoActions } from "../../redux/modules/photos";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        profile: user.profile

    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            dispatch(photoActions.getFeed()); //getFeed
            dispatch(photoActions.getSearch());  //getSearch
            dispatch(userActions.getNotifications());   //getNotifications
            dispatch(userActions.getOwnProfile());   //getProfile
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);