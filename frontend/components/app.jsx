import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Splash from './splash'
// import SignupFormContainer from '../components/session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import NavBarContainer from '../components/navbar/navbar_container'
import Modal from './modal/modal'

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute path="/feed" component={NavBarContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default withRouter(App);


{/* <AuthRoute path="/signup" component={SignupFormContainer}/> */}
{/* <ProtectedRoute path='/feed' component={NewsFeedContainer}/> */}