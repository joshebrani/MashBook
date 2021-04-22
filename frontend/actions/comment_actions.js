import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});



export const makeComment = (comment) => (dispatch) =>
  CommentAPIUtil.createComment(comment).then((comment) => dispatch(receiveComment(comment)));

export const updateComment = (comment) => (dispatch) =>
  CommentAPIUtil.editComment(comment).then((comment) => dispatch(receiveComment(comment)));

export const destroyComment = (commentId) => (dispatch) =>
  CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)));
