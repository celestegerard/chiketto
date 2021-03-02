import React, { Component } from 'react';
import Login from '../components/Login.js';
import Logout from '../components/Logout.js'


class LoginContainer extends Component {

  render() {


    return (
      <React.Fragment>
      <Login setLog={this.props.setLog}/>
      <Logout />
      </React.Fragment>

    )
  }
}

export default LoginContainer;
