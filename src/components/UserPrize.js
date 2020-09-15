import React, { Component } from 'react';

class UserPrize extends Component {


  render() {

    return(
      <div onClick={this.props.handlePrizeClick} >
        <div class="PrizeContainer" >
          <img className="Prize" src={this.props.prize.prizeimage.url} alt={this.props.prize.title}  onClick={this.props.handlePrizeClick} />
          <div className="yellow-sticker-user">
            <p className="price-user">{this.props.prize.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPrize;
