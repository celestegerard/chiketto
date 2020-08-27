import React, { Component } from 'react';

class Prize extends Component {
  render() {

    return(
      <div className="PrizeBoxContainer">
        <img className="Prize" src={this.props.prizeimage} alt={this.props.prize.title} />
        <p className="boxprice">{this.props.prize.text}</p>
      </div>

    )
  }
}

export default Prize;
