import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

  }
  handleInput(type) {
    return (e) =>{
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  
  handleDemo(e) {
    e.preventDefault();
    const demo = {email: "demouser@aol.com", password: "password"}
    debugger
    this.props.login(demo);
  }

  render() {
      return (
        <div>
          <form className="login">
            <div className="ep">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
              <br />
              <input
                type="password"
                name="email"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            </div>

            <div className="blue">
              <button onClick={this.handleSubmit}>Log In</button>
              <button onClick={this.handleDemo}>Demo User</button>
            </div>

            <div className="border"></div>

            <button className="new">Create New Account</button>
          </form>
        </div>
      );
  }
}

export default Login;