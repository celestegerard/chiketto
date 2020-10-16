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
      <div className="bp-space"></div>
      <select className="ap-price">{userList}</select>
      <p className="ap-buytext">Trade in {this.props.price} stars<br/> for {this.props.prize}? </p>
      <input className="ap-buy" type="submit" value="Buy" onClick={this.props.postPrize }/>
      <p onClick={this.props.cancelBuyPrize} className="ap-no">Cancel</p>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
