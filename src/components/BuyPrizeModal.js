import React from "react";
export default class BuyPrizeModal extends React.Component {

  generateUserList = () => {
    return this.props.users.map(user => <option onChange={this.props.prepBuyPrize} value={user.name} key={user.id} id={user.id} >{user.name}</option>)
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
      <select className="ap-price" onChange={this.props.prepBuyPrize} ><option selected value="Name">Name</option>{userList}</select>
      <p className="ap-buytext" id={this.props.prize}>Trade in {this.props.price} stars<br/> for {this.props.prize}? </p>
      <input className="ap-buy" type="submit" value="Trade" onClick={this.props.postBuyPrize }/>
      <p onClick={this.props.cancelBuyPrize} className="ap-no">Cancel</p>
      </div>
      </div>
      </React.Fragment>
    )
  }
}
