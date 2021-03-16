import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login_form';

const mstp = ({ errors }) => {
    return {
        errors: errors.session
    }
}

const mdtp = dispatch => {
    return {
        login: (user) => dispatch(login(user))
    }
}

export default connect(mstp, mdtp)(Login);