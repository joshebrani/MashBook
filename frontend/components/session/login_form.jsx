import React from 'react';
import {Link} from 'react-router-dom'

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
            <div className="two">
              <input type="text" name="email" placeholder="Email" />
              <br/>
              <input type="password" name="email" placeholder="Password" />
            </div>

            <button>Log In</button>
<br/>
            <Link>
              Forgot Password?
            </Link>
          </form>
        </div>
      );
  }
}

export default Login;