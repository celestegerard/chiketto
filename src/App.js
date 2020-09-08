import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import jackson from './jackson.jpeg';
import bouncyball from './prizes/bouncyball.jpg'
import dino from './prizes/dino.jpg'
import paint from './prizes/paint.jpg'
import jelloplay from './prizes/jelloplay.jpeg'
import peppa from './prizes/peppabandaid.jpg'
import chalk from './prizes/chalk.jpg'
import fish from './prizes/fish.jpg'
import lizards from './prizes/lizards.jpg'
import settings from './settings.jpg'
import AddPrizeModal from './components/AddPrizeModal.js'
import Modal from './components/Modal'
import avatar from './Avatar.jpg'
import ellie from './AvatarEllie.jpg'
import wes from './AvatarWes.jpg'
import Prize from './components/Prize';
import plus from './plus.png'
import soda from './soda.JPG'
import text from './Text.jpg'
import textone from './Text1.jpg'
import star from './Star.png'
import AddTicketModal from './components/AddTicketModal.js'

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
    usersShow: false,
    prizeBox: false,
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
    .then(res => res.text())
    .then(prizes => console.log(prizes))
  }

  generatePrizes = () => {
  return this.state.prizes.map(prize => console.log("DAH PRIZES " + prize.prizeimage))
}


  subtractFromCount = () => {
    console.log("Prize at the subtract " + this.state.prize)
    console.log("Price at subtract" + this.state.price )
    const count = this.state.count - this.state.price
    this.setState({ count })
    const prizeName = this.state.prize
    this.setState({ [prizeName] : 15 })
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
  console.log(user)
  this.setState({
    addTicket: !this.state.addTicket,
    user
  })
}


  render() {
    const prizes = this.generatePrizes();
    console.log(this.state.addTicket)

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleMinusClick} className="minus">-</button>
        </header>

        {this.state.prizeBox ? <React.Fragment><div className="addPrize"><img className="addPrize" onClick={this.handleAddPrizeClick} src={plus} /></div><div className='flexbox-wrapper'><AddPrizeModal addPrize={this.state.addPrize} cancel={this.handleAddPrizeClick} /><div className="PrizeBoxContainer"><img className="Prize" src={bouncyball} alt="bouncyball" /><div className="yellow-sticker"><p className="boxprice">{this.state.bouncyball}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={dino} alt="dino" /><div className="yellow-sticker"><p className="boxprice">{this.state.dino}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={lizards} alt="lizards" /><div className="yellow-sticker"><p className="boxprice">{this.state.lizards}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={peppa} alt="peppa" /><div className="yellow-sticker"><p className="boxprice">{this.state.peppa}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={chalk} alt="chalk" /><div className="yellow-sticker"><p className="boxprice">{this.state.chalk}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={fish} alt="fish" /><div className="yellow-sticker"><p className="boxprice">{this.state.fish}</p></div></div></div></React.Fragment> : null }

        {this.state.usersShow ? <React.Fragment><div className="MeterBlue" ><img className="Profile" src={ellie} alt="Ellie" /><div className="count" onClick={this.handleStarClick} ><img className="count" src={star} alt="Ellie" /><div className="counter" alt="Ellie">{this.state.count}</div></div></div><AddTicketModal addTicket={this.state.addTicket} user={this.state.user} cancel={this.handleStarClick} plusTicket={this.plusTicket} /><div className="MeterBlue" onClick={this.checkUserClick} ><img className="Profile" src={avatar} alt="Jackson" /><div className="count"><img className="count" src={star} /><div onClick={this.handlePlusClick} className="counter">{this.state.count}</div></div></div><div className="MeterBlue"><img className="Profile" src={wes} alt="Wes" /><div className="count"><img className="count" src={star} /><div onClick={this.handlePlusClick} className="counter">{this.state.count}</div></div></div><div className="UserBottomSpace"></div></React.Fragment> : null}


          <div className="MeterBlue">
        <img className="Profile" src={avatar} alt="jackson" />
        <div className="count">
          <img className="count" src={star} />
          <div onClick={this.handlePlusClick} className="counter">{this.state.count}</div>
        </div>
        </div>

          <div>

          <div onClick={this.handlePrizeClick} >
          {this.state.bouncyball <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={bouncyball} alt="bouncyball" /><div className="yellow-sticker-user"><p className="price-user">{this.state.bouncyball}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.bouncyball} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.dino <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={dino} alt="dino" /><div className="yellow-sticker-user"><p className="price-user">{this.state.dino}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.textone <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={textone} alt="text1" /><div className="yellow-sticker-user"><p className="price-user">{this.state.textone}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.lizards <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={lizards} alt="lizards" /><div className="yellow-sticker-user"><p className="price-user">{this.state.lizards}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.peppa <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={peppa} alt="peppa" /><div className="yellow-sticker-user"><p className="price-user">{this.state.peppa}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.chalk <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={chalk} alt="chalk" /><div className="yellow-sticker-user"><p className="price-user">{this.state.chalk}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.text <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={text} alt="text" /><div className="yellow-sticker-user"><p className="price-user">{this.state.text}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick} >
          {this.state.fish <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={fish} alt="fish" /><div className="yellow-sticker-user"><p className="price-user">{this.state.fish}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div className="nav">
            <button onClick={this.handleUserClick} >Users</button>
            <button onClick={this.handlePrizeBoxClick} >Prize Box</button>
          </div>

          </div>
      </div>
    );
  }
}

export default App;
