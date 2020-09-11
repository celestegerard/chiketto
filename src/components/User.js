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

  filterPrizes = () => {
    const filteredPrizes = this.props.prizes.filter(prize => prize.text <= this.props.count)
    this.setState({ filteredPrizes })
    console.log(this.state.filteredPrizes)
  }

  generatefilteredPrizes = () => {
    if (this.state.filteredPrizes.length > 0) {

    }
    return this.state.filteredprizes.map(prize => <UserPrize handlePrizeClick={this.props.handlePrizeClick} prize={prize} key={prize.id} />)
  }


  render() {


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
      </div>

      </React.Fragment>
    )
  }
}
