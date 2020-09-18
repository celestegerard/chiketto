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
    return this.state.filteredPrizes.map(prize => <UserPrize prize={prize} key={prize.id} filterPrizes={this.filterPrizes} />)
  }


  render() {

    const prizes = this.listPrizes()

    return (
      <React.Fragment>
      <div>
        {prizes}
      </div>

      </React.Fragment>
    )
  }
}
