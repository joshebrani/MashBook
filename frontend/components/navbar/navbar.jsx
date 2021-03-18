import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        
    }



    render() {
        return (
          <div className="nav-top">
            <button>
                <img className="bell-icon" src={window.bell} alt="" />{" "}
                </button>
            <button onClick={this.props.logout}>Log Out</button>

            
          </div>
        );
    }
}


export default NavBar;