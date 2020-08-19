import React from "react";
export default class Modal extends React.Component {


  render() {
    if(!this.props.show){
          return null;
      }

      console.log("this is what Modal thinks the price is: " + this.props.price)

    return (
      <React.Fragment>
      <div className="Modal">
      <div className="Modalmain">
      <p >Would you like this {this.props.prize} for {this.props.price} tickets?</p>
      <button className="ModalButton" onClick={this.props.subtractFromCount}> Yes </button>
      <button className="ModalButton" >No</button>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
