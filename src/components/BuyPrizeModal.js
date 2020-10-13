import React from "react";
export default class BuyPrizeModal extends React.Component {


  render() {
    if(!this.props.buyPrize){
          return null;
      }

    return (
      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">
      <p className="ap-text">Add Prize</p>
      <form>
        <input className='ap-upload' type="text" name="Prize-name" placeholder="Prize 1" onChange={this.props.handlePrizeSubmit} /><br />
        <select  className="ap-price" onChange={this.props.handlePrizeSubmit}>
          <option selected value="2 Tickets">2 Tickets</option>
          <option value="3 Tickets">3 Tickets</option>
          <option value="4 Tickets">4 Tickets</option>
          <option value="5 Tickets">5 Tickets</option>
          <option value="6 Tickets">6 Tickets</option>
          <option value="7 Tickets">7 Tickets</option>
          <option value="8 Tickets" >8 Tickets</option>
          <option value="9 Tickets">9 Tickets</option>
          <option value="10 Tickets">10 Tickets</option>
        </select>
      <input className="ap-file" type="file" accept="image/*" multiple={false} onChange={this.props.handlePrizeSubmit} /><br/>
      <input className="ap-submit" type="submit" value="Add" onClick={this.props.postPrize }/>
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
