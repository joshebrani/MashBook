import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Splash from './splash'
import SignupFormContainer from '../components/session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'


const App = () => (

    <div>
        <Route exact path="/" component={Splash}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        {/* <ProtectedRoute path='/feed' component={NewsFeedContainer}/> */}

    </div>
)

export default App