import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { REMOVE_POST } from '../actions/post_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user});
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            let newState = Object.assign({}, state)
            newState[action.user.id] = action.user
            return newState;    
        // case REMOVE_USER:
        //     let nextState = Object.assign({}, state)
        //     delete nextState[action.userId]
        //     return nextState;
        default:
            return state
    }
}

export default usersReducer