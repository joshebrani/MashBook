import React from 'react';
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      birthday: "",
      gender: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.history.push("/feed")).then(this.props.closeModal);
  }

  render() {
    let errormessage = [];
    if (this.props.errors.signup) {
      errormessage = this.props.errors.signup;
    }
    return (
      <section className="modal-background">
        <form className="modal-child">
          <div className="signup-form">
            <div className="sign-head">
              <div className="close" onClick={() => this.props.closeModal()}>
                &times;
              </div>
              <h1 className="su">Sign Up</h1>
              <p className="easy">It's quick and easy.</p>
            </div>
            <div className="break-signup"></div>
            <p className="error-login">{errormessage[0]}</p>
            <div className="text">
              <div className="fullname">
                <input
                  type="text"
                  name="fname"
                  placeholder="First name"
                  onChange={this.handleInput("fname")}
                  value={this.state.fname}
                />

                <input
                  type="text"
                  name="lname"
                  placeholder="Last name"
                  onChange={this.handleInput("lname")}
                  value={this.state.lname}
                />
              </div>

              <div className="oneline">
                <p className="error-login">{errormessage[2]}</p>
                <div className="email">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInput("email")}
                    value={this.state.email}
                  />
                </div>
                <p className="error-login">{errormessage[1]}</p>
                <div className="pass">
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    onChange={this.handleInput("password")}
                    value={this.state.password}
                  />
                </div>
              </div>
            </div>
            <div className="lab-b">Birthday</div>
            <div>
              <input
                className="bday"
                type="date"
                name="birthday"
                placeholder="1/1/2021"
                onChange={this.handleInput("birthday")}
                value={this.state.birthday}
              />
            </div>
            <div className="gb-label">Gender</div>
            <div className="gender">
              <label>
                Male
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleInput("gender")}
                  value="Male"
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleInput("gender")}
                  value="Female"
                />
              </label>
              <label>
                Other
                <input
                  type="radio"
                  name="gender"
                  onChange={this.handleInput("gender")}
                  value="Other"
                />
              </label>
            </div>
            <p className="footer">
              This is not true but it looks nicer to have this there - By
              clicking Sign Up, you agree to our Terms, Data Policy and Cookies
              Policy. You may receive SMS Notifications from us and can opt out
              any time.
            </p>
            <button onClick={this.handleSubmit} className="sign-up-btn">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    );
  }
}


export default withRouter(Signup);