import { connect } from "react-redux";
import Profile from "./profile";
import getUsers from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    return {
      user: state.entities.users[ownProps.match.params.userId],
      users: state.entities.users,
    };
    
}

const mdtp = (dispatch) => {
    return {
      getUsers: () => dispatch(getUsers()),
    };
}

export default connect(mstp, mdtp)(Profile);