import React from "react";
export default class AddPrizeModal extends React.Component {

  yestest = () => {

    console.log("IT's HITTING :) ")
  }

  render() {
    if(!this.props.addTicket){
          return null;
      }

    return (
      <React.Fragment>
      <div className="Modal">
      <div className="at-modalmain">
      <p className="at-text">Award {this.props.user} 1 ticket?</p>
        <button onClick={this.yestest} className="ModalButton-yes"> Yes </button>
        <br />
        <button className="ModalButton-no" >No</button>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
