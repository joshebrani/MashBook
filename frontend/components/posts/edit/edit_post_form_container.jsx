import { connect } from "react-redux";
import { editPost } from "../../../actions/post_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { getPosts } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import EditPostForm from "./edit_post_form";

const mstp = (state, ownProps) => {
  return {
    //   openModal: state.ui.modal,
    formType: "Edit Post",
    currentUser: state.session.currentUser.user,
    post_author_id: state.session.currentUser.user.id,
    wall_id: state.session.currentUser.user.id,
  };
};

const mdtp = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    editPost: (post) => dispatch(editPost(post)),
    getPosts: () => dispatch(getPosts()),
  };
};

export default withRouter(connect(mstp, mdtp)(EditPostForm));
