import React, { Component } from 'react';


class Prize extends Component {


  render() {

    return(
      <div onClick={this.props.handleBuyPrizeClick} className="PrizeBoxContainer">
        <img className="Prize" src={this.props.prize.prizeimage.url} alt={this.props.prize.title} id={this.props.prize.id}/>
        <div className="yellow-sticker">
          <p className="boxprice">{this.props.prize.price}</p>
        </div>
      </div>
    )
  }
}

export default Prize;
