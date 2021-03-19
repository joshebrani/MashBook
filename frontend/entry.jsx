import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'

import { signup, login, logout } from './actions/session_actions' 
import { signupUser, loginUser, logoutUser } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            sessions: {
                currentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadedState)

    // Testing Testing 1 2 3

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.signupUser = signupUser;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;

    // Done

    ReactDOM.render(<Root store={store} />, root)
})


