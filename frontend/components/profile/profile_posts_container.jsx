import { connect } from "react-redux";
import ProfilePosts from "./profile_posts";
import { getUsers } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/modal_actions";


const mstp = (state, ownProps) => {
  return {
    // user: state.entities.users[ownProps.match.params.userId],
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
  };
};

const mdtp = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(ProfilePosts);
