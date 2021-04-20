import React from 'react';


class UserSidebar extends React.Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.props.getUsers()
        .then(() => this.props.getPosts());
    }

    
    render() {
        const { users } = this.props
        return (
          // <div>
          //   <h1>Contacts</h1>
          //   {users.map((user) => (
          //     <p className="user-contact">
          //       <img className="person-icon" src={window.person} alt="" />{" "}
          //       {user.fname + " " + user.lname}
          //       {/* <button onClick={() => this.props.destroyUser(user.id)}>
          //         Delete Post
          //       </button> */}
          //     </p>
          //   ))}
          // </div>
          <div>
            test
          </div>
        );
    }
}

export default UserSidebar