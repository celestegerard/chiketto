import React from "react";
import star from '../Star.png'


export default class User extends React.Component {

  render() {

    return (
      <React.Fragment>
      <div className="MeterBlue" >
      <img className="Profile" src={ this.props.user.avatar.url } alt="profile"/>
      <div className="count" onClick={this.props.incrementCount} >
        <div id={this.props.user.name}>
      <img className="count" src={star} alt="star" />
      <div className="counter" id={this.props.user.id}>{this.props.user.count}</div>
      </div>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
