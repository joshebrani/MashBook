import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from '../navbar/navbar_container';

class Profile extends React.Component {
    constructor(props) {
        // debugger
        super(props);

    }


    render() {
        return (
          <div>
            <div>
              <NavbarContainer />
            </div>
            <div className="full-profile">
              <div className="white">
                <div className="pic-name">
                  {this.props.user.gender == "Female" ? (
                    <img className="profile-icon" src={window.female} alt="" />
                  ) : (
                    <img className="profile-icon" src={window.male} alt="" />
                  )}
                  <p className="profile-name">
                    {this.props.user.fname + " " + this.props.user.lname}
                  </p>
                </div>
                <div className="profile-break"></div>

                <div className="under-name">
                  <ul className="about-stuff">
                    <li>Posts</li>
                    <li>About</li>
                    <li>Friends</li>
                    <li>Photos</li>
                    <li>More</li>
                  </ul>
                  <div className="buttons-not-work">
                    {this.props.user.id == this.props.currentUser.user.id ? (
                      <div>
                        <button className="add-story">Add Story</button>
                        <button className="edit-profile">Edit Profile</button>
                      </div>
                    ) : (
                      <div>
                        <button className="add-story">Add Friend</button>
                        <button className="edit-profile">Message</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(Profile);