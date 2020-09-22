import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'


export default class User extends React.Component {

  render() {

    return (
      <React.Fragment>
      <div className="MeterBlue" >
      <img className="Profile" src={this.props.user.avatar.url} />
      <div className="count" onClick={this.props.filterPrizes} >
      <img className="count" src={star} alt="Ellie" />
      <div className="counter" alt="Ellie">{this.props.user.count}</div>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
