import React from "react";
export default class AddTicketModal extends React.Component {


  render() {
    if(!this.props.addTicket){
          return null;
      }

    return (
      <React.Fragment>
      <div className="Modal">
      <div className="at-modalmain">
      <p className="at-text">Award {this.props.user} 1 star?</p>
        <button onClick={this.props.plusTicket} className="ModalButton-yes"> Yes </button>
        <br />
        <button className="ModalButton-no" onClick={this.props.cancel} >No</button>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
