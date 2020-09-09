import React from "react";
import ellie from '../AvatarEllie.jpg'
import star from '../Star.png'
import AddTicketModal from '../components/AddTicketModal.js'
import avatar from '../Avatar.jpg'
import wes from '../AvatarWes.jpg'

export default class Home extends React.Component {


  render() {
    return (
    <React.Fragment>
    <div className="MeterBlue" >
    <img className="Profile" src={ellie} alt="Ellie" />
    <div className="count" onClick={this.handleStarClick} >
    <img className="count" src={star} alt="Ellie" />
    <div className="counter" alt="Ellie">{this.props.count}</div>
    </div>
    </div>
    <AddTicketModal addTicket={this.props.addTicket} user={this.props.user} cancel={this.handleStarClick} plusTicket={this.plusTicket} />
    <div className="MeterBlue" onClick={this.checkUserClick} >
    <img className="Profile" src={avatar} alt="Jackson" />
    <div className="count">
    <img className="count" src={star} />
    <div onClick={this.handlePlusClick} className="counter">{this.props.count}</div>
    </div>
    </div>
    <div className="MeterBlue">
    <img className="Profile" src={wes} alt="Wes" />
    <div className="count">
    <img className="count" src={star} />
    <div onClick={this.handlePlusClick} className="counter">{this.props.count}</div>
    </div>
    </div>
    <div className="UserBottomSpace">
    </div>
    </React.Fragment>
    )
  }
}
