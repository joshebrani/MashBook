import { connect } from 'react-redux';
import { makePost, getPosts } from '../../../actions/post_actions';
import {openModal, closeModal } from '../../../actions/modal_actions';
// import { withRouter } from 'react-router-dom';
import CreatePostForm from './create_post_form';
import { getUsers } from '../../../actions/user_actions';

const mstp = (state, ownProps) => {
    return {
    //   openModal: state.ui.modal,
      formType: "Create Post",
      currentUser: state.session.currentUser.user,
      post_author_id: state.session.currentUser.user.id,
      wall_id: state.session.currentUser.user.id,
    };
}


const mdtp = dispatch => {
    return {
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      makePost: (post) => dispatch(makePost(post)),
      getPosts: () => dispatch(getPosts()),
      getUsers: () => dispatch(getUsers()),
    };
}


export default connect(mstp,mdtp)(CreatePostForm);