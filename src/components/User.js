import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import Modal from '../components/Modal'
import UserPrize from '../components/UserPrize.js'


export default class User extends React.Component {

  state = {
    filteredPrizes: []
  }


  filterPrizes = () => {
     this.props.prizes.filter(prize => prize.price <= this.props.count).map( filteredPrize => this.setState({ filteredPrizes: [...this.state.filteredPrizes, filteredPrize ] }) )
  }

  listPrizes = () => {
    return this.state.filteredPrizes.map(prize => <UserPrize prize={prize} key={prize.id} />)
  }

  render() {

    console.log(this.state.filteredPrizes)

    const prizes = this.listPrizes()

    return (
      <React.Fragment>
      <div className="MeterBlue" >
      <img className="Profile" src={ellie} />
      <div className="count" onClick={this.filterPrizes} >
      <img className="count" src={star} alt="Ellie" onClick={this.listPrizes} />
      <div className="counter" alt="Ellie">{this.props.count}</div>
      </div>
      </div>
      <div>
        {prizes}
      </div>

      </React.Fragment>
    )
  }
}
