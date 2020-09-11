import React, { Component } from 'react';

import bouncyball from '../prizes/bouncyball.jpg'

class UserPrize extends Component {


  render() {

    return(
      <div onClick={this.props.handlePrizeClick} >
        <div class="PrizeContainer" >
          <img className="Prize" src={bouncyball} alt={this.props.prize.title}  onClick={this.props.handlePrizeClick} />
          <div className="yellow-sticker-user">
            <p className="price-user">{this.props.prize.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPrize;
