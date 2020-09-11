import React from "react";
import plus from '../plus.png';
import AddPrizeModal from '../components/AddPrizeModal.js';
import bouncyball from '../prizes/bouncyball.jpg';
import dino from '../prizes/dino.jpg'
import lizards from '../prizes/lizards.jpg'
import peppa from '../prizes/peppabandaid.jpg'
import chalk from '../prizes/chalk.jpg'
import fish from '../prizes/fish.jpg'
import Prize from '../components/Prize.js';


export default class PrizesContainer extends React.Component {

  generatePrizes = () => {
    return this.props.prizes.map(prize => <Prize prize={prize} key={prize.id} />)
  }


  render() {

    const crizes = this.generatePrizes();

    return (
      <React.Fragment>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} />
      </div>
      <div>
      </div>
      <div className='flexbox-wrapper'>
      {crizes}
      <AddPrizeModal addPrize={this.props.addPrize} cancel={this.props.handleAddPrizeClick} />
      </div>
      <div>
      </div>
      </React.Fragment>
    )
  }
}
