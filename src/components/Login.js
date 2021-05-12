import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-hhea5b41gh6e99d24vnhuko4ik5n9mk2.apps.googleusercontent.com'
const parentURL = "http://localhost:3000/api/v1/parents"
const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"

let parents = []
let parentnames = []

function Login(parent) {

    const yep = (res) => {

      fetch( parentURL )
      .then(res => res.json())
      .then(data => parents = data)

      const setParentId = async (name) => {
        parent.onLoginClick(name)
      }

      parents.map(parent => parentnames = [...parentnames, parent.name] )
      setParentId(res.profileObj.name)

      parent.loggedin()
    }


    const onFailure = ( res ) => {
      console.log('[Login failed] res:', res)
    }

    return (
      <div>
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={yep}
      onFailure={onFailure}
      className="Login"
      isSignedIn={true}
      />
      </div>
    )
  }


export default Login;
