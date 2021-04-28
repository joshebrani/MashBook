import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Splash from './splash'
// import SignupFormContainer from '../components/session/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
// import NavBarContainer from '../components/navbar/navbar_container'
import Modal from './modal/modal'
import NewsfeedContainer from '../components/newsfeed/newsfeed_container';
// import EditPostFormContainer from '../components/posts/edit/edit_post_form_container';
import ProfileContainer from '../components/profile/profile_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute path="/feed" component={NewsfeedContainer} />
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
      {/* <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
    </Switch>
  </div>
);

export default withRouter(App);


{/* <AuthRoute path="/signup" component={SignupFormContainer}/> */}
{/* <ProtectedRoute path='/feed' component={NewsFeedContainer}/> */}