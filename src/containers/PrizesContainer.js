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


export default class Prizes extends React.Component {

  generatePrizes = () => {
    this.props.prizes.map(prize => console.log(prize))
  }

  render() {

    const prizes = this.generatePrizes();

    return (
      <React.Fragment>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} />
      </div>
      <div className='flexbox-wrapper'>
      <AddPrizeModal addPrize={this.props.addPrize} cancel={this.props.handleAddPrizeClick} />
      { prizes }
      </div>
      </React.Fragment>
    )
  }
}

// <div className="addPrize">
// <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} />
// </div>
// <div className='flexbox-wrapper'>
// <AddPrizeModal addPrize={this.props.addPrize} cancel={this.props.handleAddPrizeClick} />
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={bouncyball} alt="bouncyball" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.bouncyball}</p>
// </div>
// </div>
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={dino} alt="dino" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.dino}</p>
// </div>
// </div>
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={lizards} alt="lizards" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.lizards}</p>
// </div>
// </div>
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={peppa} alt="peppa" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.peppa}</p>
// </div>
// </div>
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={chalk} alt="chalk" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.chalk}</p>
// </div>
// </div>
//
//
// <div className="PrizeBoxContainer">
// <img className="Prize" src={fish} alt="fish" />
// <div className="yellow-sticker">
// <p className="boxprice">{this.props.fish}</p>
// </div>
// </div>

// </div>
