import React from 'react';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
    constructor(props) {
        super(props);


    }


    componentDidMount() {
        this.props.getUsers().then(() => this.props.getPosts());
    }
    

    render() {
        const {posts, currentUser, destroyPost, authors, openModal, closeModal, getPosts, getUsers} = this.props;
        return (
          <div>
            <ul className="after-post">
              {posts.length > 0 ? (
                posts.reverse().map((post) => (
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
                    currentUser={currentUser}
                    destroyPost={destroyPost}
                    authors={authors}
                    key={post.id}
                    openModal={openModal}
                    closeModal={closeModal}
                    getPosts={getPosts}
                    getUsers={getUsers}
                  />
                ))
              ) : (
                <div class="lds-hourglass"></div>
              )}
            </ul>
          </div>
        );
    }
}

export default PostIndex