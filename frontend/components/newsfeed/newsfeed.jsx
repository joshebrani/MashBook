import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexContainer from '../posts/post_index_container';
import UserSidebarContainer from './user_sidebar_container';


class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("Create Post");
  }

//   componentDidMount() {
//     this.props.getUsers();
//     this.props.getPosts();
//   }

  render() {
    return (
      <div className="main-feed-div">
        <div>
          <NavbarContainer />
        </div>

        <div className="around-the-form">
        <img className="person-icon-form" src={window.person} alt="" />{" "}
          <div onClick={this.handleClick} className="open-post-form">
            <p>{`What's on your mind, ${this.props.currentUser.user.fname}?`}</p>
          </div>
        </div>
        <div className='contacts'>
            <UserSidebarContainer/>
        </div>

        <div className="feed-back">
          <PostIndexContainer />
        </div>

      </div>
    );
  }
}


export default NewsFeed;