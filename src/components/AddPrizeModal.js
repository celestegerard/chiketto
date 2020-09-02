import React from "react";
export default class AddPrizeModal extends React.Component {


  render() {
    if(!this.props.addPrize){
          return null;
      }

    return (
      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">
      <p className="ap-text">Add Prize</p>
      <form>
      <input className="ap-input" type="text" name="Prize-name" value="Prize 1" /><br />
      <div className="ap-price-row">
      <select className="ap-price">
      <option selected value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      </select>
      <p className="ap-text">tickets</p>
      </div>
        <input className="ap-upload" type="submit" value="Upload Image" />
      <input className="ap-submit" type="submit" value="Add" />
      <p className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
