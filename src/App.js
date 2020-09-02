import React, { Component } from 'react';
import './App.css';
import jackson from './jackson.jpeg';
import bouncyball from './prizes/bouncyball.jpg'
import dino from './prizes/dino.jpg'
import jelloplay from './prizes/jelloplay.jpeg'
import peppa from './prizes/peppabandaid.jpg'
import chalk from './prizes/chalk.jpg'
import fish from './prizes/fish.jpg'
import lizards from './prizes/lizards.jpg'
import settings from './settings.jpg'
import AddPrizeModal from './components/AddPrizeModal.js'
import Modal from './components/Modal'
import add from './Plus.png'
import star from './prizes/star.svg'
import avatar from './Avatar.jpg'
import ellie from './AvatarEllie.jpg'
import wes from './AvatarWes.jpg'
import Prize from './components/Prize';
import plus from './plus.jpeg'
import soda from './soda.JPG'

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
    soda: 1,
    show: false,
    prize: 'b',
    price: 0,
    usersShow: false,
    prizeBox: false,
    prizes: [],
    addPrize: false
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


  render() {

    console.log("addPrize " + this.state.addPrize)
    const prizes = this.generatePrizes();

    return (
      <div className="App">
        <header className="App-header">
        </header>
        {prizes}
        {this.state.prizeBox ? <React.Fragment><div className="addPrize"><img className="addPrize" onClick={this.handleAddPrizeClick} src={plus} /></div><div className='flexbox-wrapper'><AddPrizeModal addPrize={this.state.addPrize}/><div className="PrizeBoxContainer"><img className="Prize" src={bouncyball} alt="bouncyball" /><div className="yellow-sticker"><p className="boxprice">{this.state.bouncyball}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={dino} alt="dino" /><div className="yellow-sticker"><p className="boxprice">{this.state.dino}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={lizards} alt="lizards" /><div className="yellow-sticker"><p className="boxprice">{this.state.lizards}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={peppa} alt="peppa" /><div className="yellow-sticker"><p className="boxprice">{this.state.peppa}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={chalk} alt="chalk" /><div className="yellow-sticker"><p className="boxprice">{this.state.chalk}</p></div></div><div className="PrizeBoxContainer"><img className="Prize" src={fish} alt="fish" /><div className="yellow-sticker"><p className="boxprice">{this.state.fish}</p></div></div></div></React.Fragment> : null }
        {this.state.usersShow ? <React.Fragment><div className="UserTopSpace"></div><div className="MeterBlue"><img className="User" src={ellie} alt="jackson" /></div><div onClick={this.handleUserClick} className="UserMeterBlue"><img className="User" src={avatar} alt="jackson" /></div><div className="UserMeterBlue"><img className="User" src={wes} alt="jackson" /></div><div className="UserBottomSpace"></div></React.Fragment> : null}
          <div className="MeterBlue">
        <img className="Profile" src={avatar} alt="jackson" />
        </div>
          <div className="count">
          <button onClick={this.handleMinusClick} className="minus">-</button>
          <div className="counter">{this.state.count}</div>
          <button onClick={this.handlePlusClick} className="plus">+</button>
          </div>

          <div>

          <div onClick={this.handlePrizeClick} >
          {this.state.bouncyball <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={bouncyball} alt="bouncyball" /><div className="yellow-sticker-user"><p className="price-user">{this.state.bouncyball}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.bouncyball} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}  >
          {this.state.dino <= this.state.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={dino} alt="dino" /><div className="yellow-sticker-user"><p className="price-user">{this.state.dino}</p></div><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.price} subtractFromCount={this.subtractFromCount}/></div></React.Fragment> : null }
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
