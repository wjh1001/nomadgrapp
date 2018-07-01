// Imports
import { API_URL } from "../../constants";
import { ActionCreator as userActions } from "./user"

// actions

// action Creators

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    };
}


// API actions
 function getFeed(){
     return (dispatch, getState) => {
         const { user: { token } } = getState();
         fetch(`${API_URL}/images/`, {
             headers: {
                 Authorizations: `JWT ${token}`
             }
         })
         .then(response => {
             if(response.status === 401){
                 dispatch(userActions.logOut());
             } else {
                 return response.json();
             }

         })
         .then(json => dispatch(setFeed))
     }
 }


// initial State

const initialState = {}

// reducer

const reducer(state = initialState, action ){
    switch (action.type){
        case SET_FEED:
        return applySetFeed(state, action);

        default:
        return state;
    }
}

// reducer functions

function applySetFeed(state, action){
    const { feed } = action
    return {
        ...state,
        feed
    }
}


// exports

const actionCreators = {
    getFeed
};

export { actionCreators };

//Default Reducer Export


export default reducer;