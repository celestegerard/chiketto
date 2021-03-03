import React, { Component } from 'react';
import Login from '../components/Login.js';
import Logout from '../components/Logout.js'


class LoginContainer extends Component {

  render() {

    return (
      <React.Fragment>
      <Login parents={this.props.parents} />
      <Logout />
      </React.Fragment>

    )
  }
}

export default LoginContainer;
