import React from 'react';
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            birthday: '',
            gender: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    render() {
        return (
          <section className="modal-background">
            <form className="modal-child">
              <div className="signup-form">
                <div className="sign-head">
                  <Link className="close" to="/">
                    &times;
                  </Link>
                  <h1 className="su">Sign Up</h1>
                  <p className="easy">It's quick and easy.</p>
                </div>

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
                    <div className="email">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInput("email")}
                        value={this.state.email}
                      />
                    </div>

                    <div className="pass">
                      <input
                        type="password"
                        name="password"
                        placeholder="Create new password"
                        onChange={this.handleInput("password")}
                        value={this.state.password}
                      />
                    </div>
                  </div>
                </div>

                <div className="bday">
                  <input
                    type="date"
                    name="birthday"
                    placeholder="1/1/2021"
                    onChange={this.handleInput("birthday")}
                    value={this.state.birthday}
                  />
                </div>

                <div className="gender">
                  <label>
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={this.handleInput("gender")}
                      value={this.state.gender}
                    />
                  </label>
                  <label>
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={this.handleInput("gender")}
                      value={this.state.gender}
                    />
                  </label>
                </div>

                <p className="footer">
                  By clicking Sign Up, you agree to our Terms, Data Policy and
                  Cookies Policy. You may receive SMS Notifications from us and
                  can opt out any time.
                </p>

                <button onClick={this.handleSubmit} className="new">
                  Sign Up
                </button>
              </div>
            </form>
          </section>
        );
    }
}


export default Signup;