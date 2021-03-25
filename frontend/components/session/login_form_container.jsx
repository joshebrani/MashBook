import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Login from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { getUsers } from '../../actions/user_actions';
// import { getPosts } from '../../actions/post_actions';

const mstp = (state, OwnProps) => {
    return {
        errors: state.errors.session,
        openModal: state.ui.modal,
        formType: 'login'
    }
}

const mdtp = dispatch => {
    return {
      login: (user) => dispatch(login(user)),
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      clearErrors: () => dispatch(clearErrors()),
      getUsers: () => dispatch(getUsers()),
    //   getPosts: () => dispatch(getPosts())
    };
}

export default connect(mstp, mdtp)(Login)