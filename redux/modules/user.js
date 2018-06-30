// Imports

import {
  API_URL
} from "../../constants";
// Actions


const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

// Action Creators

// API Actions


function login(username, password) {
  return dispatch => {
    fetch(`${API_URL}/rest-auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(setLogIn(json.token));
        }
        if (json.user) {
          dispatch(setUser(json.user));
        }
      });
  };
}

// Initial State

const initialState = {
  isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

// Reducer Functions

// Exports

const actionCreators = {
  login
};

export {
  actionCreators
};


// Default Reducer Export

export default reducer;