import React from "react";
export default class Modal extends React.Component {


  render() {
    if(!this.props.show){
          return null;
      }

    return (
      <React.Fragment>
      <div className="Modal">
      <div className="Modalmain">
      <p className="modal-text">Buy this {this.props.prize} for {this.props.price} tickets?</p>
      <button className="ModalButton-yes" onClick={this.props.subtractFromCount}> Yes </button>
      <br />
      <button className="ModalButton-no" >No</button>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
