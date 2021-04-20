import React from 'react';

        const findDate = (time) => {
            const date = new Date(time);
            return date.toDateString() + " at " + date.toLocaleTimeString();
            }

        // const arr = [`${window.search}`, `${window.home}`, `${window.messages}`]
        // let randomNum = Math.floor(Math.random() * arr.length);
        // let randomImage = arr[randomNum]

const PostIndexItem = (props) => (
  <div>
    <p className="poster-name">
      {props.authors[props.post.post_author_id] && props.authors[props.post.post_author_id].gender === 'Female' ?
      <img className="person-icon" src={window.female} alt="" /> :
      <img className="person-icon" src={window.male} alt="" />
      }
      {props.authors[props.post.post_author_id]
        ? props.authors[props.post.post_author_id].fname +
          " " +
          props.authors[props.post.post_author_id].lname
        : "Mystery Man"}
      {/* Technical Difficulties  */}
    </p>
    <p className="time-post">{findDate(props.post.created_at)}</p>
    <p className="post-body">{props.post.body}</p>
    {props.post.post_author_id === props.currentUser.id ? (
      <button onClick={() => props.destroyPost(props.post.id)}>
        Delete Post
      </button>
    ) : null}
    {/* <button onClick={() => props.openModal("Edit Post")}>
        Edit
    </button> */}

    <ul className="like-and-comment">
      <p>Like</p>
      <p>Comment</p>
    </ul>
  </div>
);

export default PostIndexItem