import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-hhea5b41gh6e99d24vnhuko4ik5n9mk2.apps.googleusercontent.com'



function Login() {

    // const onSuccess = ( res ) => {
    //   console.log('[Login Success] currentUser:', res.profileObj)
    //   console.log('id:', res.profileObj.googleId, 'img:', res.profileObj.imageUrl, "name:", res.profileObj.name)
    // }

    const yep = (res) => {
      console.log( res.profileObj.googleId, res.profileObj.imageUrl )
      console.log("YEW")
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
      cookiePolicy={'single_host_origin'}
      className="Login"
      isSignedIn={true}
      />
      </div>
    )
  }


export default Login;
