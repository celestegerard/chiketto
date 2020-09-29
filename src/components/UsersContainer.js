import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'
import User from './User.js'


export default class UsersContainer extends React.Component {

  state = {
    selectedUser: ''
  }


  generateUser = () => {
     return this.props.users.map( user => <User incrementCount={this.props.incrementCount} user={user} key={user.id} /> )
  }


  render() {

    const heyhey = this.generateUser();

    return (
      <React.Fragment>
      <p>HEY!</p>

      <div>
      {heyhey}
      </div>

      </React.Fragment>
    )
  }
}
