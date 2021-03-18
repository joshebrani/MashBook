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
      <div className="nav-top">
        <button>
          <img className="bell-icon" src={window.bell} alt="" />{" "}
        </button>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}


export default NavBar;