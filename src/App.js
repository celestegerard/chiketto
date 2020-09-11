import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import settings from './settings.jpg'
import Modal from './components/Modal'
import Prize from './components/Prize';
import plus from './plus.png'
import text from './Text.jpg'
import textone from './Text1.jpg'
import star from './Star.png'
import PrizesContainer from './containers/PrizesContainer.js'
import Home from './components/Home.js'
import AddTicketModal from './components/AddTicketModal.js'
import User from './components/User.js'

const URL = "http://localhost:3000/prizes"


class App extends Component {

  state = {
    count: 0,
    bouncyball: 2,
    dino: 3,
    peppa: 4,
    chalk: 5,
    lizards: 6,
    fish: 7,
    text: 6,
    textone: 3,
    soda: 1,
    show: false,
    prize: 'b',
    price: 0,
    prizes: [],
    addPrize: false,
    addTicket: false,
    user: ''
  }


  componentDidMount() {
    fetch( URL , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(prizes => this.setState({ prizes }))
  }

  subtractFromCount = () => {
    console.log("Prize at the subtract " + this.state.prize)
    console.log("Price at subtract" + this.state.price )
    const count = this.state.count - this.state.price
    this.setState({ count })
    const prizeName = this.state.prize
    this.setState({
      [prizeName] : 15,
      show: !this.state.show
     })
  }

  handlePlusClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  plusTicket = () => {
    this.setState({
      count: this.state.count + 1,
      addTicket: !this.state.addTicket
    })
  }


  handleMinusClick = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  };

handlePrizeClick = (e) => {
  const newPrize = e.target.alt
  const newPrice = this.state[newPrize]
  this.setState({
    prize: newPrize,
    price: newPrice,
    show: !this.state.show
  })
}

handleUserClick = () => {
  this.setState({
    usersShow: !this.state.usersShow,
    prizeBox: false
  })
}

handlePrizeBoxClick = () => {
  this.setState({
    usersShow: false,
    prizeBox: !this.state.prizeBox
  })
}

handleAddPrizeClick = () => {
  this.setState({
    addPrize: !this.state.addPrize
  })
}

handleStarClick = (e) => {
  console.log("its hitting")
  const user = e.target.alt
  console.log(e.target.alt)
  this.setState({
    addTicket: !this.state.addTicket,
    user
  })
}


  render() {


    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleMinusClick} className="minus">-</button>
        </header>

        <Router>
          <div className="nav">
            <Link to="/users">
              <button>Users</button>
            </Link>
            <Link to="/">
              <button onClick={this.handleUserClick} >Home</button>
            </Link>
            <Link to="/prizes">
              <button onClick={this.handlePrizeBoxClick} addTicket={this.state.addTicket} user={this.state.user} >Prizes</button>
            </Link>
          </div>
          <Switch>
            <Route path="/users">
              <User count={this.state.count} prizes={this.state.prizes} subtractFromCount={this.subtractFromCount} handlePrizeClick={this.handlePrizeClick} prize={this.state.prize} show={this.state.show} count={this.state.count} plusTicket={this.plusTicket} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/prizes">
              <PrizesContainer prizes={this.state.prizes} handleAddPrizeClick={this.handleAddPrizeClick} addPrize={this.state.addPrize} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/">
              <Home count={this.state.count} handleStarClick={this.handleStarClick} addTicket={this.state.addTicket} plusTicket={this.plusTicket} cancel={this.handleStarClick} />
            </Route>
          </Switch>
        </Router>

  </div>
    );
  }
}

export default App;
