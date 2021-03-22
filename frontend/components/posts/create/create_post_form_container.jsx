import { connect } from 'react-redux';
import { makePost } from '../../../actions/post_actions';
import {openModal, closeModal } from '../../../actions/modal_actions';
// import { withRouter } from 'react-router-dom';
import CreatePostForm from './create_post_form';


const mstp = (state, ownProps) => {
    return {
    //   openModal: state.ui.modal,
      formType: "Create Post",
      currentUser: state.session.currentUser.user,
    //   postAuthorId: state.entities.posts.id.post_author_id,
    //   wall_id: state.entities.posts.id.wall_id
    };
}


const mdtp = dispatch => {
    return {
      openModal: (modal) => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      makePost: (post) => dispatch(makePost(post))
    };
}


export default connect(mstp,mdtp)(CreatePostForm);