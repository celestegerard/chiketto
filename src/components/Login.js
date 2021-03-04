import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-hhea5b41gh6e99d24vnhuko4ik5n9mk2.apps.googleusercontent.com'
const parentURL = "http://localhost:3000/api/v1/parents"
const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"

let parents = []
let parentnames = []

function Login(parentid) {

    const yep = (res) => {

      {parentid.onLoginClick(parentid)}

      fetch( parentURL )
      .then(res => res.json())
      .then(data => parents = data)

      parents.map(parent => parentnames = [...parentnames, parent.name] )
      parentnames.includes(res.profileObj.name) ? parentid = { parentid: 2 } : console.log('wo!')


      console.log(parentid.parentid)
        console.log(parentid)

      // const postParent = async () => {
      //   const res = await fetch( parentURL, { method: 'POST', body: parent })
      //   const json = await res.json()
      //   const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )]), fetch( parentURL )])
      //   // const loadjson = await Promise.all(loadres.map(r => r.json()))
      //   // const state = await this.setState({ prizes: loadjson[0], users: loadjson[1], parents: loadjson[2] })
      // }
      // // postParent()

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

// onChange={parentid.onLoginClick(parentid)}
