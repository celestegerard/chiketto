import React, { Component } from 'react';

import bouncyball from '../prizes/bouncyball.jpg'

class Prize extends Component {


  render() {

    return(
      <div className="PrizeBoxContainer">
      <img className="Prize" src={bouncyball} alt={this.props.prize.title} />
      <div className="yellow-sticker">
      <p className="boxprice">{this.props.prize.price}</p>
      </div>
      </div>
    )
  }
}

export default Prize;
