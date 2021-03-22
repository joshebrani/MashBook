import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';


const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, oldState, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, oldState, {[action.post.id]: action.post})
        case REMOVE_POST:
            let newState = Object.assign({}, oldState)
            delete newState[action.postId]
            return newState
        default:
            return oldState;
    }
};


export default postsReducer