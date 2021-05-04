import { connect } from "react-redux";
import ProfilePosts from "./profile_posts";
import { getUsers, getUser } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { getPosts, destroyPost } from '../../actions/post_actions';


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
    getUser: (id) => dispatch(getUser(id)),
    getPosts: () => dispatch(getPosts()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    destroyPost: (id) => dispatch(destroyPost(id)),
  };
};

export default connect(mstp, mdtp)(ProfilePosts);
