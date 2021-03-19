import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions'
import Signup from './signup_form'
import { openModal, closeModal } from "../../actions/modal_actions";



const mstp = (state, OwnProps) => {
    return {
        errors: state.errors.session, 
        formType: 'signup'
    }
}

const mdtp = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mstp, mdtp)(Signup);