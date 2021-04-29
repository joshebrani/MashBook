import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';



const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            // return Object.assign({}, action.modal, action.id);
            return {modal: action.modal, id: action.id}

        case CLOSE_MODAL:
            return null;    

        default:
            return state;
    }
}

export default modalReducer;