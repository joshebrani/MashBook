import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";



export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});



export const getUsers = () => (dispatch) => (
    UserAPIUtil.fetchUsers()
    .then((users) => dispatch(receiveAllUsers(users)))
);

export const getUser = (userId) => (dispatch) => (
    UserAPIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
);

