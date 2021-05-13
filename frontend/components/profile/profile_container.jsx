import { connect } from "react-redux";
import Profile from "./profile";
import {getUsers} from '../../actions/user_actions';
import {getPosts} from '../../actions/post_actions';


const mstp = (state, ownProps) => {
    return {
      user: state.entities.users[ownProps.match.params.userId],
      users: Object.values(state.entities.users),
      currentUser: state.session.currentUser,
      posts: state.entities.posts,
    };
    
}

const mdtp = (dispatch) => {
    return {
      getUsers: () => dispatch(getUsers()),
      getPosts: () => dispatch(getPosts()),
    };
}

export default connect(mstp, mdtp)(Profile);