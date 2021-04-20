import React from 'react';
import { withRouter } from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
    };
    
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleClick = this.handleClick.bind(this)
    
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  // componentDidMount() {
  //   this.props.getUsers()
  //   .then(() => this.props.getPosts())
  // }

  handleInput(type) {
    return (e) =>{
      this.setState({
        [type]: e.target.value
      })
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/feed"));
  }
  
  handleDemo(e) {
    e.preventDefault();
    const demo = { email: "demouser@aol.com", password: "password" };
    this.props.login(demo)
    .then(() => this.props.history.push("/feed"))
    .then(() => this.props.getPosts())
    .then(() => this.props.getUsers())
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.openModal('signup')
  }
  
  render() {
    let errormessage
    if (this.props.errors.login) {
      errormessage = this.props.errors.login;
    }
    return (
      <div>
        <form className="login">
          <div className="ep">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              autoComplete="on"
              onChange={this.handleInput("email")}
            />
            <br />
            <input
              type="password"
              name="email"
              placeholder="Password"
              value={this.state.password}
              autoComplete="on"
              onChange={this.handleInput("password")}
            />
          </div>

          <p className="error-login">{errormessage}</p>
          <div className="blue">
            <button onClick={this.handleSubmit}>Log In</button>
            <button onClick={this.handleDemo}>Demo User</button>
          </div>

          <div className="border"></div>

          
          <button className="new" onClick={this.handleClick}>
            Create New Account
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);