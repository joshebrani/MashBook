import React from 'react';
// import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';


class Splash extends React.Component {
    render() {
        return (
          <div>
            <header className="splash">
              <div className="mash-splash">
                <h1 className="title">MashBook</h1>
                <p className="desc">
                  Connect with friends and the world around you on Mashbook
                </p>
              </div>
              <LoginFormContainer />
              {/* <SignupFormContainer/> */}
            </header>
            <footer className={window.innerHeight > 680 ? "splash-footer" : 'short'}>
              <p>Facebook Clone by Joshua Ebrani ©</p>
              <a
                href="https://www.linkedin.com/in/joshuaebrani/"
                target="_blank"
              >
                Linkedin
              </a>
              <a href="https://github.com/joshebrani" target="_blank">
                Github
              </a>
            </footer>
          </div>
        );
    }
}

export default Splash;