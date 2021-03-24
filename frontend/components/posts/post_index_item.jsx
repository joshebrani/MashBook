import React from 'react';

        // const dateParser = (createdAt) => {
        //     const date = new Date(createdAt);
        //     return date.toDateString() + " at " + date.toLocaleTimeString();
        //     }

const PostIndexItem = (props) => (
  <div>
    {/* <p>{dateParser(props.post.createdAt)}</p> */}
    <p className='poster-name'>
      <img className="person-icon" src={window.person} alt="" />{" "}
      {props.authors[props.post.post_author_id].fname +
        " " +
        props.authors[props.post.post_author_id].lname}
    </p>
    <p className='post-body'>{props.post.body}</p>
    <button onClick={() => props.destroyPost(props.post.id)}>
      Delete Post
    </button>

    <ul className='like-and-comment'>
        <p>Like</p>
        <p>Comment</p>
    </ul>
  </div>
);

export default PostIndexItem