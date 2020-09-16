import React from "react";
import plus from '../plus.png';
import AddPrizeModal from '../components/AddPrizeModal.js';
import Prize from '../components/Prize.js';


export default class PrizesContainer extends React.Component {

  generatePrizes = () => {
    return this.props.prizes.map(prize =>  <Prize prize={prize} key={prize.id} /> )
  }


  render() {

    const crizes = this.generatePrizes();

    return (
      <React.Fragment>
      <div className="addPrize">
      <img className="addPrize" onClick={this.props.handleAddPrizeClick} src={plus} />
      </div>
      <div>
      </div>
      <div className='flexbox-wrapper'>
      {crizes}
      <AddPrizeModal addPrize={this.props.addPrize} cancel={this.props.handleAddPrizeClick} handlePrizeSubmit={this.props.handlePrizeSubmit} />
      </div>
      <div></div>
      <div className="UserBottomSpace">
      </div>
      </React.Fragment>
    )
  }
}
