import React from 'react';

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
    }

    render() {
        return (
          <section className="Modal">
            <form>
              <h1>Sign Up</h1>
              <p>It's quick and easy.</p>
              
              <div className='text'>

              <div className="fullname">
                <input type="text" name="fname" placeholder="First name" />

                <input type="text" name="lname" placeholder="Last name" />
              </div>
              
                <div className='oneline'>

              <div className="email">
                <input type="text" name="email" placeholder="Email" />
              </div>

              <div className="pass">
                <input type="password" name="password" placeholder="Create new password" />
              </div>
                </div>

              </div>

              <div className="bday">
                <input type="date" name="birthday" placeholder="1/1/2021" />
              </div>

              <div className="gender">
                <label>
                  Male
                  <input type="radio" name="gender" value="Male" />
                </label>

                <label>
                  Female
                  <input type="radio" name="gender" value="Female" />
                </label>
              </div>

              <p className='footer'>
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </p>

              <button>Sign Up</button>
            </form>
          </section>
        );
    }
}


export default Signup;