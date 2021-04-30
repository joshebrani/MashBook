import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from '../navbar/navbar_container';
import { Link } from "react-router-dom";
import ProfilePostsContainer from './profile_posts_container';

// import PostIndexContainer from '../posts/post_index_container';

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
            <div>
              {/* {this.props.user.posts ? this.props.user.posts.map((post) => (
            //  <div>{post.body}</div>
            <PostIndexContainer post={post}/>
              )) : null} */}

              <div>
                <ProfilePostsContainer user={this.props.user} key={this.props.user.id}/>
              </div>


              <div className='photo-grid'>

              <h1 className='photo-head'>Photos</h1>
              {this.props.user.fname == "Josh" || this.props.user.fname == "Demo"  ? (
                <div className='photos'>
                <img  src={window.doge} alt="" />
                <img  src={window.liu} alt="" />
                </div>
              ) : null}
              </div>

                <div className='friends-box'>

                <h1 className='photo-head'>Users</h1>
              <div className='friends-grid'>
                {this.props.users.map((user) => (
                  <div className='friend-pic'>
                    <Link to={`/users/${user.id}`}>
                  {user.gender == "Female" ? 
                     <img className="person-icon-form" src={window.female} alt="" /> :
                     <img className="person-icon-form" src={window.male} alt="" /> 
                    }
                  <p>{user.fname + " " + user.lname}</p>
                    </Link>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(Profile);