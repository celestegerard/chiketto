import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'
import User from './User.js'
import settings from '../settings.png'
import Prize from '../components/Prize.js';


export default class UsersContainer extends React.Component {


  generateUser = () => {
     return this.props.users.filter( user => user.name.includes('C')).map( filteredUser => (
       <User incrementCount={this.props.incrementCount} user={filteredUser} key={filteredUser.id} />
     ))
  }

  generatePrizes = () => {
    return this.props.prizes.map(prize => <Prize prize={prize} key={prize.id} />)
  }


  render() {

    const selectedUser = this.generateUser()
    const prizes = this.generatePrizes()

    console.log("YEEE", this.props.prizes)

    return (
      <React.Fragment>
      <div className="header">
      </div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleSettingsClick} src={settings} />
      </div>
      <div>
      { selectedUser }
      </div>
      <div className='up-wrapper'>
        { prizes }
      </div>

      </React.Fragment>
    )
  }
}

// <User incrementCount={this.props.incrementCount} user={user} key={user.id} />
