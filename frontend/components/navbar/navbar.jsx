import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
// import PostIndexContainer from '../posts/post_index_container';
// import CreatePostFormContainer from '../posts/create/create_post_form_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  
  logout(e) {
    e.preventDefault();
    this.props.logout(this.state).then(() => this.props.history.push("/"));
  }
  
  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.openModal("Create Post");
  // }
  
  render() {
    // debugger
    return (
      <div>
        <div className="nav-top">
          <div className="m-s">
            <div className="m-icon">
              <Link to="/feed">
                <img src={window.m} alt="" />{" "}
              </Link>
            </div>
            <img className="search-icon" src={window.search} alt="" />{" "}
          </div>

          <div className="h-v-g">
            <img className="home-icon" src={window.home} alt="" />{" "}
            <img className="video-icon" src={window.video} alt="" />{" "}
            <img className="group-icon" src={window.group} alt="" />{" "}
          </div>

          <div className="m-b-d">
            <img className="messages-icon" src={window.messages} alt="" />{" "}
            <img className="bell-icon" src={window.bell} alt="" />{" "}
            <img className="down-icon" src={window.down} alt="" />{" "}
          </div>
          <div className="logout-nav" onClick={this.logout}>Log Out</div>
        {/* <PostIndexContainer/>
        <div onClick={this.handleClick} className='open-post-form'>
          <p>{`What's on your mind, ${this.props.currentUser.user.fname}?`}</p>
        </div>
         */}
        </div>

        {/* <CreatePostFormContainer /> */}


        <div className="nav-side">
          {/* <p>profile</p> */}
          <p>
            <a href="https://www.linkedin.com/in/joshuaebrani/">
              <img className="linkedin-icon" src={window.linkedin} alt="" />{" "}
              Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/joshebrani">
              <img className="github-icon" src={window.github} alt="" /> Github
            </a>
          </p>

          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
        </div>
      </div>
    );
  }
}


export default withRouter(NavBar);