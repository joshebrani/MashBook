import { connect } from "react-redux";
import { makeComment, destroyComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";
// import { withRouter } from 'react-router-dom';

const mstp = (state) => {
  return {
    currentUser: state.session.currentUser.user,
    authors: state.entities.users,
    comment: state.entities.comments.comment
    // post: state.entities.posts[ownProps.post.id],
  };
};

const mdtp = (dispatch) => {
  return {
    makeComment: (comment) => dispatch(makeComment(comment)),
    destroyComment: (id) => dispatch(destroyComment(id)),
  };
};

export default connect(mstp, mdtp)(CommentForm);
