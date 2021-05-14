import React from "react";
import { GoogleLogout } from 'react-google-login';

const clientId = '1037231150604-jr42ulpk4asq1e77kf98q72g5h9o5gjd.apps.googleusercontent.com'


function Logout(bob) {

    const onSuccess = () => {

      bob.onLogoutClick()

    }


    return (
      <div>
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      className="Login"
      ></GoogleLogout>
      </div>
    )

  }

export default Logout;
