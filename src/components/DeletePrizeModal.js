import React from "react";
export default class DeletePrizeModal extends React.Component {

  generatePrizes = () => {
    return this.props.prizes.map( prize => <React.Fragment><div className='ap-upload' type="text" name="Prize-name"><div className="childName">{prize.title}</div><div className="deleteChild" onClick={this.props.deletePrize} id={prize.id}>-</div></div><br /></React.Fragment> )
  }

  render() {
    // if(!this.props.showDeletePrize){
    //       return null;
    //   }

      const prizes = this.generatePrizes()

    return (
      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">

        <p className="ap-text">Delete Prize</p>
        { prizes }
        <p onClick={this.props.cancel} className="ap-no">Done</p>

      </div>
      </div>
      </React.Fragment>
    )
  }
}
