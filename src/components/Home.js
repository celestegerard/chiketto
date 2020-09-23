import React from "react";
import ellie from '../AvatarEllie.jpg'
import star from '../Star.png'
import AddTicketModal from '../components/AddTicketModal.js'
import avatar from '../Avatar.jpg'
import wes from '../AvatarWes.jpg'
import User from './User.js'
import settings from '../settings.png'
import SettingsModal from '../components/SettingsModal.js'

export default class Home extends React.Component {

  generateUsers = () => {
    return this.props.users.map(user => <User incrementCount={this.props.incrementCount} user={user} key={user.id} />)
  }

  render() {

    console.log(this.props.settings)

    const yo = this.generateUsers()

    return (
    <React.Fragment>
      <div className="header">
      </div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleSettingsClick} src={settings} />
      </div>

      <SettingsModal deleteChild={this.props.deleteChild} postChild={this.props.postChild} submitChild={this.props.submitChild} showAddChild={this.props.showAddChild} addChild={this.props.addChild} users={this.props.users} settings={this.props.settings}  cancel={this.props.handleSettingsCancelClick} />

      <div>{yo}</div>

    <AddTicketModal addTicket={this.props.addTicket} user={this.props.user} cancel={this.props.cancel} plusTicket={this.props.plusTicket} />

    <div className="UserBottomSpace">
    </div>
    </React.Fragment>
    )
  }
}
