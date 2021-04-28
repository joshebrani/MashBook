import React from "react";
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      post_id: this.props.post.id,
      comment_author_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeComment(this.state);
    this.setState({ comment: "" });
  }

  handleInput(type) {
    return (e) =>
      this.setState({
        [type]: e.currentTarget.value,
      });
  }

  // componentDidUpdate() {
  //   debugger
  //   (this.props.comment ? this.props.getPost(this.props.comment.post_id) : null)
  // }

  render() {
    return (
      <something>
        {/* <span className="pic-comment">
          {this.props.currentUser.gender == "Female" ? (
            <img src={window.female} alt="" />
          ) : (
            <img src={window.male} alt="" />
          )}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={this.state.comment}
              onChange={this.handleInput("comment")}
              className="comment-form"
            />
          </form>
        </span> */}
        <something className="comments">
          {this.props.post.comments
            ? this.props.post.comments.map((comment) => (
                <span className='one-more-flex'>
                  <span className='flex-comment'>
<Link to={`/users/${comment.comment_author_id}`}>

                    {
                      (this.props.authors[
                        comment.comment_author_id
                      ].gender == "Female" ? (
                        <img className="person-icon" src={window.female} alt="" />
                        ) : (
                          <img className="person-icon" src={window.male} alt="" />
                          ))
                        }
                        </Link>
                        </span>
                  <span className="comment">
                    <br />
                    <span className="pic-comment-author">

                    <p className="comment-name">
                      {this.props.authors[comment.comment_author_id].fname +
                        " " +
                        this.props.authors[comment.comment_author_id].lname}
                    </p>
                        </span>
                    <p className="comment-body">{comment.comment}</p>
                  </span>
                  {comment.comment_author_id === this.props.currentUser.id ? (
                    <button
                      className="comment-delete"
                      onClick={() => this.props.destroyComment(comment.id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </span>
              ))
            : null}

          <span>
            <span className="comment">
              <p className="comment-name">
                {this.props.comment ? this.props.comment.author : null}
              </p>
              <p className="comment-body">
                {this.props.comment ? this.props.comment.comment : null}
              </p>
            </span>
            {this.props.comment ? (
              <button
                className="comment-delete"
                onClick={() => this.props.destroyComment(this.props.comment.id)}
              >
                Delete
              </button>
            ) : null}
          </span>
        </something>
        <span className="pic-comment">
          {this.props.currentUser.gender == "Female" ? (
            <img src={window.female} alt="" />
          ) : (
            <img src={window.male} alt="" />
          )}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={this.state.comment}
              onChange={this.handleInput("comment")}
              className="comment-form"
            />
          </form>
        </span>
      </something>
    );
  }
}

export default CommentForm;
