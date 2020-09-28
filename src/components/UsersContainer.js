import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'
import User from './User.js'


export default class UsersContainer extends React.Component {

  state = {
    filteredPrizes: []
  }


  filterUsers = () => {
     this.props.users.map( user => <User user={user} key={user.id} /> )
  }


  render() {

    const yeep = this.filterUsers()

    return (
      <React.Fragment>
      <p>HEY!</p>
      <div>
      {yeep}
      </div>

      </React.Fragment>
    )
  }
}
