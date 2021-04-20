import React from "react";
import User from './User.js'
import settings from '../settings.png'
import Prize from '../components/Prize.js';


export default class UsersContainer extends React.Component {

  generateUser = () => {
    const parentsprizes = this.props.prizes.filter(prize => prize.parent_id === this.props.parentid)
    return parentsprizes.map(prize =>  <Prize buyPrize={this.props.buyPrize} prize={prize} key={prize.id} handleBuyPrizeClick={this.props.handleBuyPrizeClick} /> )
  }

  generateUser = () => {
    const parentsuser = this.props.user.filter( user => user.parent_id === this.props.parentid)
    console.log(parentsuser)
    console.log("THIS ARE THE CHILDREN OF ONE PERSON", parentsuser)
     // return this.props.users.filter( user => user.name.includes('C')).map( filteredUser => (
     //   <User incrementCount={this.props.incrementCount} user={filteredUser} key={filteredUser.id} />
     // ))
  }

  generatePrizes = () => {
    return this.props.prizes.map(prize => <Prize prize={prize} key={prize.id} />)
  }


  render() {

    const selectedUser = this.generateUser()
    const prizes = this.generatePrizes()

    return (
      <React.Fragment>
      <div className="header">
      </div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleSettingsClick} src={settings} alt="settings" />
      </div>
      <div>
      { selectedUser }
      </div>
      <div className='up-wrapper'>
        { prizes }
      </div>
      <div className="UserBottomSpace">
      </div>

      </React.Fragment>
    )
  }
}
