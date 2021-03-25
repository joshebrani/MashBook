import { connect } from 'react-redux';
import PostIndex from './post_index';
import { getPosts, destroyPost } from '../../actions/post_actions';
import { getUsers } from '../../actions/user_actions';
import { openModal, closeModal } from "../../actions/modal_actions";




const mstp = (state) => ({
  posts: Object.values(state.entities.posts),
  currentUser: state.session.currentUser.user,
  authors: state.entities.users,
});


const mdtp = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  destroyPost: (postId) => dispatch(destroyPost(postId)),
  getUsers: () => dispatch(getUsers()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});


export default connect(mstp, mdtp)(PostIndex)