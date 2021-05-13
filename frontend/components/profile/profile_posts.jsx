import React from "react";
import { withRouter } from "react-router-dom";
import { findDate } from '../posts/post_index_item';
import CommentFormContainer from '../comments/comment_form_container';


class ProfilePosts extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("Create Post");
  }

  handleDelete(id) {
    // e.preventDefault();
    this.props.destroyPost(id).then(() => this.props.getPosts());
  }

  render() {
    return (
      <div className={this.props.currentUser.user.id == this.props.user.id ? 'pro-around-user' : 'pro-around-not-user'}>
        {this.props.currentUser.user.id == this.props.user.id ? (
          <div className="around-the-form-profile">
            {this.props.currentUser.user.gender === "Female" ? (
              <img className="person-icon-form" src={window.female} alt="" />
            ) : (
              <img className="person-icon-form" src={window.male} alt="" />
            )}

            <div onClick={this.handleClick} className="open-post-form">
              <p>{`What's on your mind, ${this.props.currentUser.user.fname}?`}</p>
            </div>
          </div>
        ) : (
          <p className="around-the-form-profile-2">{`You will be able to post on ${this.props.user.fname}'s wall soon`}</p>
        )}

        {/* <div className='photo-grid'>
          {this.props.user.posts.length > 0 ? (
            <div>
              {Object.values(this.props.user.posts)
              .reverse()
              .map((post) => (
                <div>

                {this.props.posts[post.id].photoUrl ? 
                      <img className='post-photo' src={this.props.posts[post.id].photoUrl} alt=""/> :
                      null
                    }
                    </div>
              ))}
            </div>
          ) :
                <div>
                  No Photos
                </div>
          }
        </div> */}

        <div>
          {this.props.user.posts.length > 0 ? (
            <div className="after-post-profile">
              {Object.values(this.props.user.posts)
                .reverse()
                .map((post) => (
                  <div>
                    <p className="poster-name">
                      <a>
                        {this.props.user.gender === "Female" ? (
                          <img
                            className="person-icon"
                            src={window.female}
                            alt=""
                          />
                        ) : (
                          <img
                            className="person-icon"
                            src={window.male}
                            alt=""
                          />
                        )}
                        {this.props.user.fname + " " + this.props.user.lname}
                      </a>
                    </p>
                    <p className="time-post">{findDate(post.created_at)}</p>
                    <p className="post-body">
                      {post.body}
                      {/* <span className="delete-edit-post">
                        {post.post_author_id ===
                        this.props.currentUser.user.id ? (
                          <button
                            className="poster-button"
                            onClick={() => this.handleDelete(post.id)}
                          >
                            Delete Post
                          </button>
                        ) : null}
                        {post.post_author_id ===
                        this.props.currentUser.user.id ? (
                          <button
                            className="poster-button"
                            onClick={() =>
                              this.props.openModal("Edit Post", post.id)
                            }
                          >
                            Edit Post
                          </button>
                        ) : null}
                      </span> */}
                      {this.props.posts[post.id].photoUrl ? 
                      <img className='post-photo' src={this.props.posts[post.id].photoUrl} alt=""/> :
                      null
                    }
                    </p>

                    <ul className="like-and-comment">
                      <p>Like</p>
                      <p>Comment</p>
                    </ul>
                    <CommentFormContainer post={this.props.posts[post.id]} />
                  </div>
                ))}
            </div>
          ) : (
            "No Posts Yet"
          )}
        </div>
      </div>
    );
  }
}


export default withRouter(ProfilePosts);