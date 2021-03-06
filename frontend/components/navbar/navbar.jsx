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

  componentDidMount() {
    this.props.getUsers().then(() => this.props.getPosts());
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.openModal("Create Post");
  // }

  render() {
    return (
      <div>
        <div className="nav-top">
          <div className="m-s">
            <div className="m-icon">
              <Link to="/feed">
                <img src={window.m} alt="" />{" "}
              </Link>
            </div>
            <a href="https://joshebrani.github.io/" target="_blank">
              <img className="search-icon" src={window.port} alt="" />{" "}
            </a>
            <input
              type="text"
              className="search"
              id=""
              placeholder=" ⬅ View My Portfolio"
            />
          </div>

          <div className="h-v-g">
            <a href="https://www.linkedin.com/in/joshuaebrani/" target="_blank">
              <img className="home-icon" src={window.blue} alt="" />{" "}
            </a>
            <a href="https://github.com/joshebrani" target="_blank">
              <img className="group-icon" src={window.ghub} alt="" />{" "}
            </a>
            <a
              href="https://joshebrani.github.io/Defend-My-Food/"
              target="_blank"
            >
              <img className="game-icon" src={window.game} alt="" />{" "}
            </a>
            <a href="https://angel.co/u/joshua-ebrani" target="_blank">
              <img className="video-icon" src={window.angel} alt="" />{" "}
            </a>
          </div>

          <Link
            // className={window.innerWidth > 1412 ? "flex-profile" : "flex-small"}
            className="flex-profile"
            to={`/users/${this.props.currentUser.user.id}`}
          >
            {this.props.currentUser.user.gender === "Female" ? (
              <img className="nobg" src={window.female} alt="" />
            ) : (
              <img className="nobg" src={window.male} alt="" />
            )}
            <p>{this.props.currentUser.user.fname}</p>
          </Link>
          {/* <div className={window.innerWidth > 1412 ? "m-b-d" : "none"}> */}
          <div className="m-b-d">
            <div className="profile-nav"></div>
            <a
              href="https://joshebrani.github.io/assets/My%20Resume.pdf"
              target="_blank"
            >
              <img className="messages-icon" src={window.resume1} alt="" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/joshuaebrani/" target="_blank">
              <img className="bell-icon" src={window.black} alt="" />{" "}
            </a>
            <a href="https://github.com/joshebrani" target="_blank">
              <img className="down-icon" src={window.ghub} alt="" />{" "}
            </a>
          </div>
          <div className="logout-nav" onClick={this.logout}>
            <img className="down-icon" src={window.ex} alt="" /> Log Out
          </div>
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
            <a href="https://www.linkedin.com/in/joshuaebrani/" target="_blank">
              <img className="linkedin-icon" src={window.lifull} alt="" />{" "}
            </a>
          </p>
          <p>
            <a href="https://github.com/joshebrani" target="_blank">
              <img className="github-icon" src={window.ghubfull} alt="" />
            </a>
          </p>
          <p>
            <a href="https://joshebrani.github.io/" target="_blank">
              <img className="defend-icon" src={window.portfull} alt="" />
            </a>
          </p>
          <p>
            <a
              href="https://joshebrani.github.io/Defend-My-Food/"
              target="_blank"
            >
              <img className="defend-icon" src={window.defend} alt="" />
            </a>
          </p>
          {/* <p>
            <a href="">
              <img className="port-icon" src={window.creator} alt="" /> Meet The
              Creator
            </a>
          </p> */}

          {/* <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p> */}
        </div>
      </div>
    );
  }
}


export default withRouter(NavBar);