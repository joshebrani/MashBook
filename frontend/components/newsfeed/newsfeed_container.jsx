import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import NewsFeed from "./newsfeed";
import { getUsers } from "../../actions/user_actions";
import { getPosts, destroyPost } from "../../actions/post_actions";

const mstp = (state) => ({
  currentUser: state.session.currentUser,
});

const mdtp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  getPosts: () => dispatch(getPosts()),
  destroyPost: (postId) => dispatch(destroyPost(postId)),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mstp, mdtp)(NewsFeed);
