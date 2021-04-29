import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';


const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // debugger

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, oldState, action.posts)
        case RECEIVE_POST:
            return Object.assign({}, oldState, {[action.post.id]: action.post})
        // case RECEIVE_COMMENT:
        //     return
        case REMOVE_POST:
            let newState = Object.assign({}, oldState)
            delete newState[action.postId]
            return newState
        default:
            return oldState;
    }
};


export default postsReducer