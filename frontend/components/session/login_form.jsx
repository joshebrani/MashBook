import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import Modal from 'react-modal';
import SignupFormContainer from './signup_form_container'


class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    // this.openModal = this.openModal.bind(this)
    
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
    this.props.login(this.state)
  }
  
  handleDemo(e) {
    e.preventDefault();
    const demo = { email: "demouser@aol.com", password: "password" };
    this.props.login(demo)
  }

  // openModal(e) {
  //   e.preventDefault()
  //   this.props.openModal(<SignupFormContainer/>)
  // }
  
  render() {
    // const [setModalIsOpen]  = useState(false);
    let errormessage
    if (this.props.errors) {
      errormessage = this.props.errors;
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

            <p className='error-login'>{errormessage}</p>
            <div className="blue">
              <button onClick={this.handleSubmit}>Log In</button>
              <button onClick={this.handleDemo}>Demo User</button>
            </div>

            <div className="border"></div>

            {/* <button onClick={() => setModalIsOpen(true)} className='new'>Create New Account</button>
              <Modal isOpen={true}>
                  <SignupFormContainer/>
              </Modal> */}
            {/* <Link className="new" to="/signup">Create New Account</Link> */}
            <button className='new' onClick= {()=>(this.props.openModal('signup'))}>Create New Account</button>
              {/* <SignupFormContainer/> */}
          </form>
        </div>
      );
  }
}

export default withRouter(Login);