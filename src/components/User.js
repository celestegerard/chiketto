import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import bouncyball from '../prizes/bouncyball.jpg';
import dino from '../prizes/dino.jpg'
import lizards from '../prizes/lizards.jpg'
import peppa from '../prizes/peppabandaid.jpg'
import chalk from '../prizes/chalk.jpg'
import fish from '../prizes/fish.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'


export default class User extends React.Component {

  state = {
    filteredPrizes: []
  }

  generatePrizes = () => {
    return this.props.prizes.map(prize => <UserPrize prize={prize} />)
  }


  render() {

const prizes = this.generatePrizes()

    return (
      <React.Fragment>
      <div className="MeterBlue" >
      <img className="Profile" src={ellie} />
      <div className="count" onClick={this.filterPrizes} >
      <img className="count" src={star} alt="Ellie" onClick={this.listPrizes} />
      <div className="counter" alt="Ellie">{this.props.count}</div>
      </div>
      </div>
      <div>
        {prizes}
      </div>

      </React.Fragment>
    )
  }
}
