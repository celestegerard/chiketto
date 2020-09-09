import React from "react";
import ellie from '../AvatarEllie.jpg'
import star from '../Star.png'
import AddTicketModal from '../components/AddTicketModal.js'
import avatar from '../Avatar.jpg'
import wes from '../AvatarWes.jpg'

export default class Home extends React.Component {


  render() {

    console.log(this.props.count)

    return (
    <React.Fragment>
    <div className="MeterBlue" >
    <img className="Profile" src={ellie} />
    <div className="count" onClick={this.props.handleStarClick} >
    <img className="count" src={star} alt="Ellie" />
    <div className="counter" alt="Ellie">{this.props.count}</div>
    </div>
    </div>
    <AddTicketModal addTicket={this.props.addTicket} user={this.props.user} cancel={this.handleStarClick} plusTicket={this.plusTicket} />

    <div className="MeterBlue" onClick={this.checkUserClick} alt="Jackson" >
    <img className="Profile" src={avatar} />
    <div className="count" onClick={this.props.handleStarClick} >
    <img className="count" src={star} alt="Jackson"/>
    <div className="counter">{this.props.count}</div>
    </div>
    </div>


    <div className="MeterBlue">
    <img className="Profile" alt="Wes" src={wes} />
    <div className="count" alt="Wes" onClick={this.props.handleStarClick} >
    <img className="count" src={star} alt="Wes" />
    <div className="counter" alt="Wes" >{this.props.count}</div>
    </div>
    </div>
    <div className="UserBottomSpace">
    </div>
    </React.Fragment>
    )
  }
}
