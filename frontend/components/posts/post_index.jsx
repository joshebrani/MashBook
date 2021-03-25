import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);


    }


    componentDidMount() {
        this.props.getPosts().then(() => this.props.getUsers());
    }

    render() {
        const {posts, destroyPost, authors, openModal, closeModal} = this.props;
        return (
          <div>
            <ul className="after-post">
              {posts.reverse().map(post => (
                // <div key={post.id}>
                //   <p>
                //     {authors[post.post_author_id].fname +
                //       " " +
                //       authors[post.post_author_id].lname}
                //   </p>
                //     <p>
                //   {post.body}
                //      </p>
                //   <button onClick={() => destroyPost(post.id)}>
                //     Delete Post
                //   </button>
                // </div>
                <PostIndexItem
                post={post}
                destroyPost={destroyPost}
                authors={authors}
                key={post.id}
                openModal={openModal}
                closeModal={closeModal}
                />
              ))}
            </ul>
          </div>
        );
    }
}

export default PostIndex