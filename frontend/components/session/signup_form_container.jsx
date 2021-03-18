import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import Signup from '././signup_form'
import { openModal, closeModal } from "../../actions/modal_actions";



const mstp = ({ errors }) => {
    return {
        errors: errors.session 
    }
}

const mdtp = dispatch => {
    return {
        signup: user => dispatch(signup(user)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(Signup);