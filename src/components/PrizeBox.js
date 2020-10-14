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
    )
  }
}
