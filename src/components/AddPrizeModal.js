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
      <input className='ap-upload' type="text" name="Prize-name" placeholder="Prize 1" /><br />
      <select className="ap-price">
      <option selected value="1">1 ticket</option>
      <option value="2">2 tickets</option>
      <option value="3">3 tickets</option>
      <option value="4">4 tickets</option>
      <option value="5">5 tickets</option>
      <option value="6">6 tickets</option>
      <option value="7">7 tickets</option>
      <option value="8">8 tickets</option>
      <option value="9">9 tickets</option>
      <option value="10">10 tickets</option>
      <option value="11">11 tickets</option>
      <option value="12">12 tickets</option>
      <option value="13">13 tickets</option>
      <option value="14">14 tickets</option>
      <option value="15">15 tickets</option>
      </select>
      <input type="file" accept="image/*" multiple={false}  />
      <input className="ap-submit" type="submit" value="Add" onClick={this.props.handlePrizeSubmit }/>
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>
    )
  }
}

// <input type="text" name="Prize-name" placeholder="Prize 1" /><br />
