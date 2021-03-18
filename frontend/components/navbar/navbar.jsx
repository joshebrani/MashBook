import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault();
    this.props.logout(this.state).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div>
        <div className="nav-top">
          <div className="m-s">
            <img className="m-icon" src={window.m} alt="" />{" "}
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
          <button onClick={this.logout}>Log Out</button>
        </div>

        <div className="nav-side">
          {/* <p>profile</p> */}
          <p>
            <img className="linkedin-icon" src={window.linkedin} alt="" />{" "}
            Linkedin
          </p>
          <p>
            <img className="github-icon" src={window.github} alt="" /> Github
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


export default NavBar;