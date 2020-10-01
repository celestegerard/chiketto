import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'
import User from './User.js'
import settings from '../settings.png'


export default class UsersContainer extends React.Component {


  generateUser = () => {
     return this.props.users.map( user => <User incrementCount={this.props.incrementCount} user={user} key={user.id} />)
  }


  render() {

    const boop = this.generateUser()
    return (
      <React.Fragment>
      <div className="header">
      </div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleSettingsClick} src={settings} />
      </div>
      <div>
      { boop }
      </div>

      </React.Fragment>
    )
  }
}

// const heyhey = this.generateUser();
// {heyhey}
