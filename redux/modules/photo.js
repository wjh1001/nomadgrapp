// Imports
import { API_URL } from "../../constants";
import { ActionCreator as userActions } from "./user"

// actions


const SET_FEED = "SET_FEED";
const SET_SEARCH = "SET_SEARCH";

// action Creators

function setFeed(feed){
    return {
        type: SET_FEED,
        feed
    };
}

function setSearch(search){
    return {
        type: SET_SEARCH,
        search
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

function getSearch(){
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch(`${API_URL}/images/search/`, {
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
        .then(json => dispatch(setSearch(json)))
    }
}




// initial State

const initialState = {}

// reducer

const reducer(state = initialState, action ){
    switch (action.type){
        case SET_FEED:
            return applySetFeed(state, action);
        case SET_SEARCH:
            return applySetSearch(state, action);

        default:
        return state;
    }
}

// reducer functions

function applySetFeed(state, action){
    const { feed } = action;
    return {
        ...state,
        feed
    }
}


function applySetSearch(state, action ){
    const { search } = action;
    return {
        ...state,
        search
    }
}

// exports

const actionCreators = {
    getFeed,
    getSearch
};

export { actionCreators };

//Default Reducer Export


export default reducer;