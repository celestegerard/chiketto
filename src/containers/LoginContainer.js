import React from "react";
import Login from '../components/Login.js';
import Logout from '../components/Logout.js'


class LoginContainer extends React.Component {



  render() {

    return (
      <React.Fragment>
      <Login />
      <Logout />
      </React.Fragment>

    )
  }
}

export default LoginContainer;
