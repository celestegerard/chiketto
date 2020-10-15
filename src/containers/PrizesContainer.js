import React from "react";
import plus from '../plus.png';
import minus from '../delete.png'
import AddPrizeModal from '../components/AddPrizeModal.js';
import DeletePrizeModal from '../components/DeletePrizeModal.js';
import Prize from '../components/Prize.js';


export default class PrizesContainer extends React.Component {

  generatePrizes = () => {
    return this.props.prizes.map(prize =>  <Prize prize={prize} key={prize.id} /> )
  }


  render() {

    const prizes = this.generatePrizes();

    return (
      <React.Fragment>
        <div className="header"></div>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleShowDeletePrize} src={minus} />
      <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} />
      </div>
      <div>
      </div>
      <div className='flexbox-wrapper'>
      {prizes}
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
