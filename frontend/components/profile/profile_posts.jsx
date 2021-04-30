import React from "react";
import { withRouter } from "react-router-dom";
import { findDate } from '../posts/post_index_item';
import CommentFormContainer from '../comments/comment_form_container';


class ProfilePosts extends React.Component {
  constructor(props) {
    // debugger
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

//   handleClick(e) {
//     e.preventDefault();
//     this.props.openModal("Create Post");
//   }

  render() {
    return (
      <div>
        {/* <div className="around-the-form">
          
            {this.props.currentUser.user.gender === "Female" ? (
              <img className="person-icon-form" src={window.female} alt="" />
            ) : (
              <img className="person-icon-form" src={window.male} alt="" />
            )}
    
          <div onClick={this.handleClick} className="open-post-form">
            <p>{`What's on your mind, ${this.props.currentUser.user.fname}?`}</p>
          </div>
        </div> */}
        <div>
          {this.props.user.posts.length > 0 ? (
            <div className="after-post-profile">
              {Object.values(this.props.user.posts)
                .reverse()
                .map((post) => (
                  <div>
                    <p className="poster-name">
                      {this.props.user.gender === "Female" ? (
                        <img
                          className="person-icon"
                          src={window.female}
                          alt=""
                        />
                      ) : (
                        <img className="person-icon" src={window.male} alt="" />
                      )}
                      {this.props.user.fname + " " + this.props.user.lname}
                    </p>
                    <p className="time-post">{findDate(post.created_at)}</p>
                    <p className="post-body">{post.body}</p>

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