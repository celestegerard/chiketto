import React from "react";


export default class PrizeBox extends React.Component {


  render() {
    if(!this.props.prizeBox){
          return null;
      }

    return (
      <React.Fragment>
      <div className="PrizeBoxContainer">
      <img className="Prize" src={paint} alt="paint" />
      <div className="yellow-sticker">
      <p className="boxprice">{this.props.bouncyball}</p>
      </div>
      </div>
      </React.Fragment>
      // <div className="PrizeBoxContainer"><img className="Prize" src={dino} alt="dino" /><div className="yellow-sticker"><p className="boxprice">{this.state.dino}</p></div></div>
      // <div className="PrizeBoxContainer">
      // <img className="Prize" src={lizards} alt="lizards" />
      // <div className="yellow-sticker">
      // <p className="boxprice">{this.state.lizards}</p>
      // </div>
      // </div>
      // <div className="PrizeBoxContainer">
      // <img className="Prize" src={peppa} alt="peppa" />
      // <div className="yellow-sticker">
      // <p className="boxprice">{this.state.peppa}</p>
      // </div>
      // </div>
      // <div className="PrizeBoxContainer">
      // <img className="Prize" src={chalk} alt="chalk" />
      // <div className="yellow-sticker">
      // <p className="boxprice">{this.state.chalk}</p>
      // </div>
      // </div>
      // <div className="PrizeBoxContainer">
      // <img className="Prize" src={fish} alt="fish" />
      // <div className="yellow-sticker">
      // <p className="boxprice">{this.state.fish}</p>
      // </div>
      // </div>
      // </div>
    )
  }
}
