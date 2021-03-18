import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from './navbar'


const mstp = (state, ownProps) => ({
    currentUser: state.session.currentUser,
});


const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mstp, mdtp)(NavBar)