import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Splash from './splash'
import SignupFormContainer from '../components/session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from '../components/navbar/navbar_container'
import Modal from './modal/modal'

const App = () => (

    <div>
        <Modal/>
        <Route exact path="/" component={Splash}/>
        {/* <AuthRoute path="/signup" component={SignupFormContainer}/> */}
        {/* <ProtectedRoute path='/feed' component={NewsFeedContainer}/> */}
        <Route path='/feed' component={NavBarContainer}/>

    </div>
)

export default App