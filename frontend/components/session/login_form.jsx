import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
      return (
        <div>
          <form className="login">
            <div className="ep">
              <input type="text" name="email" placeholder="Email" />
              <br/>
              <input type="password" name="email" placeholder="Password" />
            </div>

        <div className='blue'>
            <button>Log In</button>
            <button>Demo User</button>
        </div>

            <div className='border'></div>

            <button className='new'>Create New Account</button>
          </form>
        </div>
      );
  }
}

export default Login;