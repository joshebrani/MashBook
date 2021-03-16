import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import Signup from '././signup_form'


const mstp = ({ errors }) => {
    return {
        errors: errors.session 
    }
}

const mdtp = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    }
}

export default connect(mstp, mdtp)(Signup);