import React from "react";
import plus from '../plus.png';
import minus from '../delete.png'
import AddPrizeModal from '../components/AddPrizeModal.js';
import DeletePrizeModal from '../components/DeletePrizeModal.js';
import BuyPrizeModal from '../components/BuyPrizeModal.js';
import Prize from '../components/Prize.js';


export default class PrizesContainer extends React.Component {

  generatePrizes = () => {
    return this.props.prizes.map(prize =>  <Prize buyPrize={this.props.buyPrize} prize={prize} key={prize.id} handleBuyPrizeClick={this.props.handleBuyPrizeClick} /> )
  }

  render() {

    const prizes = this.generatePrizes();

    return (
      <React.Fragment>
        <div className="header"></div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleShowDeletePrize} src={minus} alt="minus" />
      <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} alt="plus" />
      </div>
      <div>
      </div>
      <div className='flexbox-wrapper'>
      {prizes}
      <BuyPrizeModal prepBuyPrize={this.props.prepBuyPrize} postBuyPrize={this.props.postBuyPrize} cancelBuyPrize={this.props.cancelBuyPrize} price={this.props.price} users={this.props.users} prize={this.props.prize} buyPrize={this.props.buyPrize} prizes={this.props.prizes}  />
      <DeletePrizeModal handleShowDeletePrize={this.props.handleShowDeletePrize} closeDeletePrize={this.props.closeDeletePrize} showDeletePrize={this.props.showDeletePrize} deletePrize={this.props.deletePrize} prizes={this.props.prizes}  />
      <AddPrizeModal prizes={this.props.prizes}  postPrize={this.props.postPrize} addPrize={this.props.addPrize} cancel={this.props.handleAddPrizeClick} handlePrizeSubmit={this.props.handlePrizeSubmit} />
      </div>
      <div></div>
      <div className="UserBottomSpace">
      </div>
      </React.Fragment>
    )
  }
}
