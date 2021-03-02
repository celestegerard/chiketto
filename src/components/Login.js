import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientId = '1037231150604-hhea5b41gh6e99d24vnhuko4ik5n9mk2.apps.googleusercontent.com'
const parentURL = "http://localhost:3000/api/v1/parents"
const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"


function Login() {

    // const onSuccess = ( res ) => {
    //   console.log('[Login Success] currentUser:', res.profileObj)
    //   console.log('id:', res.profileObj.googleId, 'img:', res.profileObj.imageUrl, "name:", res.profileObj.name)
    // }
    // postChild = (e) => {
    //   e.preventDefault()
    //   const child = new FormData();
    //   child.append('name', this.state.name);
    //   child.append('avatar', this.state.avatar);
    //   child.append('count', 0);
    //
    //   const postChild = async () => {
    //     const res = await fetch( userURL, { method: 'POST', body: child })
    //     const json = await res.json()
    //     const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
    //     const loadjson = await Promise.all(loadres.map(r => r.json()))
    //     const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
    //   }
    //   postChild()
    //   this.setState({ settings: false, addChild: false })
    // }

    const yep = (res) => {
      const parent = new FormData();
      parent.append('name', res.profileObj.name);
      parent.append('googleid', res.profileObj.googleId);
      parent.append('avatar', res.profileObj.imageUrl);


      // const postParent = async () => {
      //   const res = await fetch( parentURL, { method: 'POST', body: parent })
      //   const json = await res.json()
      //   const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )]), fetch( parentURL )])
      //   // const loadjson = await Promise.all(loadres.map(r => r.json()))
      //   // const state = await this.setState({ prizes: loadjson[0], users: loadjson[1], parents: loadjson[2] })
      // }
      // // postParent()

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
