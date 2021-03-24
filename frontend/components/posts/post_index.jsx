import React from 'react';


class PostIndex extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        // this.props.getUsers();
        this.props.getPosts();
    }

    render() {
        // debugger
        const {posts, destroyPost, authors} = this.props;
        return (
          <div>
            <ul className="after-post">
              {posts.map((post) => (
                <div key={post.id}>
                  {/* {this.props.currentUser.fname} */}
                  {/* {authors[post.post_author_id].fname} */}
                  {/* {post.author} */}

                  {post.body}
                  <button
                    onClick={() => destroyPost(post.id)}
                  >Delete Post</button>
                </div>
              ))}
            </ul>
          </div>
        );
    }
}

export default PostIndex