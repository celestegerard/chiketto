import React from "react";
import AddTicketModal from '../components/AddTicketModal.js'
import User from './User.js'
import settings from '../settings.png'
import SettingsModal from '../components/SettingsModal.js'

export default class Home extends React.Component {

  generateUsers = () => {
    return this.props.users.map(user => <User incrementCount={this.props.incrementCount} user={user} key={user.id} />)
  }

  render() {

    const yo = this.generateUsers()

    return (
    <React.Fragment>
      <div className="header">
      </div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleSettingsClick} src={settings} alt="settings" />
      </div>

      <SettingsModal editChild={this.props.editChild} deleteChild={this.props.deleteChild} postChild={this.props.postChild} submitChild={this.props.submitChild} showAddChild={this.props.showAddChild} addChild={this.props.addChild} users={this.props.users} settings={this.props.settings}  cancel={this.props.handleSettingsCancelClick} />

      <div>{yo}</div>

    <AddTicketModal addTicket={this.props.addTicket} user={this.props.user} cancel={this.props.cancel} plusticket={this.props.plusticket} />

    <div className="UserBottomSpace">
    </div>
    </React.Fragment>
    )
  }
}
