import { connect } from "react-redux";
import AppContainer from "./presenter";
import { actionCreators as photoAcitons } from "../../redux/modules/photo";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn,
        profile: user.profile

    }
}


const const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            dispatch(phtoActions.getFeed()); //getFeed
            dispatch(phtoActions.getSearch());  //getSearch
            //getNotifications
            //getProfile
        }
    }
}

export default connect(mapStateToProps)(AppContainer);