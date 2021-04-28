import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from '../navbar/navbar_container';

class Profile extends React.Component {
    constructor(props) {
        // debugger
        super(props);

    }


    render() {
        return (
        <div>

            <div>
              <NavbarContainer/>
            </div>
        </div>
        )
    }
}

export default withRouter(Profile);