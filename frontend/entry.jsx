import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'

import { signup, login, logout } from './actions/session_actions' 
import { signupUser, loginUser, logoutUser } from './util/session_api_util';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost} from './util/post_api_util';
import { getPosts, getPost, makePost, editPost, destroyPost} from './actions/post_actions';
import { getUsers, getUser } from './actions/user_actions';
import { createComment, editComment, deleteComment } from './util/comment_api_util';
import { makeComment, updateComment, destroyComment } from './actions/comment_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.user
            }
        }
    }
    const store = configureStore(preloadedState);

    // Testing Testing 1 2 3

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.signupUser = signupUser;
    window.loginUser = loginUser;
    window.logoutUser = logoutUser;

    window.fetchPosts = fetchPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;

    window.getPosts = getPosts;
    window.getPost = getPost;
    window.makePost = makePost;
    window.editPost = editPost;
    window.destroyPost = destroyPost;

    window.getUsers = getUsers;
    window.getUser = getUser;

    window.createComment = createComment; 
    window.editComment = editComment;
    window.deleteComment = deleteComment;

    window.makeComment = makeComment; 
    window.updateComment = updateComment; 
    window.destroyComment = destroyComment;

    // Done

    ReactDOM.render(<Root store={store} />, root)
})


