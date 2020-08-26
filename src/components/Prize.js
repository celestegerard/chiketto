import React, { Component } from 'react';

class Prize extends Component {
  render() {

    return(
      <div className="PrizeBoxContainer">
        <img className="Prize" src={this.props.prize.title} alt={this.props.prize.title} />
        <p className="boxprice">{this.props.prize.text}</p>
      </div>
      // <div className="MemoryDetail">
      //   <p className="MemoryDetailTitle" onClick={(e) => this.props.handleMemoryDetailSelect(e.target.innerText)}>{this.props.memory.title}</p>
      //   <p className="MemoryDetailBody" >{this.props.memory.body.slice(0, 77) + '...'}</p>
      // </div>
    )
  }
}

export default Prize;
