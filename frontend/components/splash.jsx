import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';


class Splash extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className='title'>
                        <h1>MashBook</h1>
                        <p>Connect with friends and the world around you on Mashbook</p>
                    </div>
                    <LoginFormContainer/>
                    <button>Create New Account</button>
                    <SignupFormContainer/>
                </header>
            </div>
        )
    }
}

export default Splash;