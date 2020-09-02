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
      <input className="ap-input" type="text" name="Prize-name" value="Prize 1" />
        <input className="ap-input" type="number" name="name" value="Price" />
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
