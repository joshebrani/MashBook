import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';
import { Link } from 'react-router-dom';

        export const findDate = (time) => {
            const date = new Date(time);
            return date.toDateString() + " at " + date.toLocaleTimeString();
            }

        // const arr = [`${window.search}`, `${window.home}`, `${window.messages}`]
        // let randomNum = Math.floor(Math.random() * arr.length);
        // let randomImage = arr[randomNum]


const PostIndexItem = (props) => (
  <div>
    <p className="poster-name">
      {props.authors[props.post.post_author_id] ? (
        <Link to={`/users/${props.authors[props.post.post_author_id].id}`}>
          {props.authors[props.post.post_author_id].gender === "Female" ? (
            <img className="person-icon" src={window.female} alt="" />
          ) : (
            <img className="person-icon" src={window.male} alt="" />
          )}
          {props.authors[props.post.post_author_id].fname +
            " " +
            props.authors[props.post.post_author_id].lname}
        </Link>
      ) : (
        "Mystery Man"
      )}
      {/* Technical Difficulties  */}
    </p>
    <p className="time-post">
      {findDate(props.post.created_at)}
      <img className="earth" src={window.earth} alt="" />
    </p>
    <p className="post-body">
      {props.post.body}

      {/* <p>{props.post.photoUrl ? props.post.photoUrl : null}</p> */}
      {props.post.photoUrl ? 
      <img src={props.post.photoUrl} alt="" /> :
      null
    }
      <span className="delete-edit-post">
        {props.post.post_author_id === props.currentUser.id ? (
          <button
            className="poster-button"
            onClick={() =>
              props.destroyPost(props.post.id).then(() => props.getPosts())
            }
          >
            Delete Post
          </button>
        ) : null}
        {props.post.post_author_id === props.currentUser.id ? (
          <button
            className="poster-button"
            onClick={() => props.openModal("Edit Post", props.post.id)}
          >
            Edit Post
          </button>
        ) : null}
      </span>
    </p>

    <ul className="like-and-comment">
      <p>Like</p>
      <p>Comment</p>
    </ul>
    <CommentFormContainer post={props.post} />
  </div>
);

export default PostIndexItem