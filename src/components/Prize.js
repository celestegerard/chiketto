import React, { Component } from 'react';

class Prize extends Component {


  render() {

    const prizes = this.generatePrizes();

    return(
      <React.Fragment>
        { prizes }
      </React.Fragment>
    )
  }
}

export default Prize;
