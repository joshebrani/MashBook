import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { getUsers } from "../../actions/user_actions";
import {getPosts } from '../../actions/post_actions';
import UserSidebar from "./user_sidebar";

const mstp = (state) => ({
  currentUser: state.session.currentUser,
  users: Object.values(state.entities.users)
});

const mdtp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  getPosts: () => dispatch(getPosts()),
  destroyPost: (postId) => dispatch(destroyPost(postId)),
  getUsers: () => dispatch(getUsers()),
//   destroyUser: (userId) => dispatch(destroyUser(userId))
});

export default connect(mstp, mdtp)(UserSidebar);
