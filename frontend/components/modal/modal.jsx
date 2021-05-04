import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import SignupFormContainer from "../session/signup_form_container";
import CreatePostFormContainer from '../posts/create/create_post_form_container';
import EditPostFormContainer from '../posts/edit/edit_post_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "Create Post":
      component = <CreatePostFormContainer />;
      break;
    case "Edit Post":
      component = <EditPostFormContainer postId={modal.id}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
