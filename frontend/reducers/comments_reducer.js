import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';


const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, action.comment);
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState);
            delete newState[action.commentId];
            return Object.assign({}, newState);
        default:
            return oldState;
    }
}

export default commentsReducer