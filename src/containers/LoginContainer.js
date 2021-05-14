import React, { Component } from 'react';
import Login from '../components/Login.js';
import Logout from '../components/Logout.js'


class LoginContainer extends Component {

  render() {

    return (
      <React.Fragment>
      <Login loggedin={this.props.loggedin} loginparentid={this.props.loginparentid} onLoginClick={this.props.onLoginClick} />
      <Logout onLogoutClick={this.props.onLogoutClick} />
      </React.Fragment>

    )
  }
}

export default LoginContainer;
