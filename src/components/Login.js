import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-hhea5b41gh6e99d24vnhuko4ik5n9mk2.apps.googleusercontent.com'
const parentURL = "http://localhost:3000/api/v1/parents"
const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"

let parents = []

function Login() {



    const yep = (props) => {

      fetch( parentURL )
      .then(res => res.json())
      .then(data => data.map(parent => ({...parents, parent })))

      console.log(parents)


      // .then(() => console.log(parents))

      // parents[0].name === props.profileObj.name ? console.log('true!') : console.log('false!')

console.log(props.profileObj.name)

      // const parent = new FormData();
      // parent.append('name', res.profileObj.name);
      // parent.append('googleid', res.profileObj.googleId);
      // parent.append('avatar', res.profileObj.imageUrl);


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
