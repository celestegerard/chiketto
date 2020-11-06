import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-jr42ulpk4asq1e77kf98q72g5h9o5gjd.apps.googleusercontent.com'


function Login() {

    const onSuccess = ( res ) => {
      console.log('[Login Success] currentUser:', res.profileObj)
    }

    const onFailure = ( res ) => {
      console.log('[Login failed] res:', res)
    }

    return (
      <div>
      <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      className="Login"
      isSignedIn={true}
      />
      </div>
    )
  }


export default Login;
