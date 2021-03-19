import {loginUser, signupUser, logoutUser} from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";



export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    };
};

export const receiveErrors = (errors, formType) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
        formType
    };
};

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});



export const signup = user => dispatch => (
    signupUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON, 'signup'))
    ))
);

export const login = user => dispatch => (
    loginUser(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON, 'login'))
    ))
);

export const logout = () => dispatch => (
    logoutUser().then(() => (
        dispatch(logoutCurrentUser())
    ))
);

