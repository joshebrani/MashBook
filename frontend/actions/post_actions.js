import * as PostAPIUtil from '../util/post_api_util';


export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});


const receivePost = post => ({
    type: RECEIVE_POST,
    post
});


const removePost = postId => ({
    type: REMOVE_POST,
    postId
});




export const getPosts = () => dispatch => (
    PostAPIUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const getPost = (postId) => (dispatch) => (
    PostAPIUtil.fetchPost(postId)
    .then((post) => dispatch(receivePost(post)))
);

export const makePost = (post) => (dispatch) => (
    PostAPIUtil.createPost(post)
    .then((post) => dispatch(receivePost(post)))
);

export const editPost = (post) => (dispatch) => (
    PostAPIUtil.updatePost(post)
    .then((post) => dispatch(receivePost(post)))
);

export const destroyPost = (postId) => (dispatch) => (
    PostAPIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);


