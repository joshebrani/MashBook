import React from 'react';
// import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';


class Splash extends React.Component {
    render() {
        return (
          <div>
            <header className="splash">
              <div>
                <h1 className="title">MashBook</h1>
                <p className="desc">
                  Connect with friends and the world around you on Mashbook
                </p>
              </div>
              <LoginFormContainer />
              {/* <SignupFormContainer/> */}
            </header>
            <footer className="splash-footer">
              <p>Facebook Clone by Joshua Ebrani ©</p>
              <a href="https://www.linkedin.com/in/joshuaebrani/">Linkedin</a>
              <a href="https://github.com/joshebrani">Github</a>
            </footer>
          </div>
        );
    }
}

export default Splash;