import React from 'react';
import { Link } from "react-router-dom";



class UserSidebar extends React.Component {
    constructor(props) {
        super(props);


    }

    // componentDidMount() {
    //     this.props.getUsers()
    //     .then(() => this.props.getPosts());
    // }

    
    render() {
        const { users } = this.props
        return (
          <div>
            <h1>Contacts</h1>
            {users.map((user) => (
              <p className="user-contact" key={user.id}>
                <Link to={`/users/${user.id}`}>

                {user.gender === 'Female' ?
                <img className="person-icon" src={window.female} alt="" /> :
                <img className="person-icon" src={window.male} alt="" /> }
                {user.fname + " " + user.lname}
                {/* <button onClick={() => this.props.destroyUser(user.id)}>
                  Delete Post
                </button> */}
                </Link>
              </p>
            ))}
          </div>
        );
    }
}

export default UserSidebar