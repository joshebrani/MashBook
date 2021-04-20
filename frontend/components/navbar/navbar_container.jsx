import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
// import { withRouter } from "react-router-dom";
import NavBar from './navbar'
import { getUsers } from "../../actions/user_actions";



const mstp = (state, ownProps) => ({
  currentUser: state.session.currentUser,
//   openModal: state.ui.modal
});


const mdtp = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  getUsers: () => dispatch(getUsers()),
});


export default connect(mstp, mdtp)(NavBar);