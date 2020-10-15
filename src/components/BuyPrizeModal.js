import React from "react";
export default class BuyPrizeModal extends React.Component {

  generateUserList = () => {
    return this.props.users.map(user => <option value={user.name} key={user.id} >{user.name}</option>)
  }

  render() {
    if(!this.props.buyPrize){
          return null;
      }

      const userList = this.generateUserList()

      console.log(this.props.buyPrize)
    return (
      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">
      <p className="ap-text">Buy <select>{userList}</select> this {this.props.prize} for {this.props.price} stars? </p>
      <input className="ap-submit" type="submit" value="Buy" onClick={this.props.postPrize }/>
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
