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
import Modal from './components/Modal'



class App extends Component {

  state = {
    count: 0,
    bouncyball: 2,
    dino: 3,
    peppa: 4,
    chalk: 5,
    lizards: 6,
    fish: 7,
    show: false,
    prize: 'b',
    price: 0
  }


subtractFromCount = () => {
  const newCount = this.state.count - this.state.bouncyball
  this.setState({ count : newCount })
  this.setState({ bouncyball : 15 })
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
  const prize = e.target.alt
  this.setState({ prize: prize })
  console.log(e.target.alt)
  console.log(this.state.prize)

this.setState({
  show: !this.state.show,
  prize: prize,
  price: this.state.prize
})


}


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img className="settings" src={settings} alt="jackson" />
        </header>
        <img className="Profile" src={jackson} alt="jackson" />
          <div className="count">
          <button onClick={this.handleMinusClick} className="minus">-</button>
          <div className="counter">{this.state.count}</div>
          <button onClick={this.handlePlusClick} className="plus">+</button>
          </div>

          <div>
          <div onClick={this.handlePrizeClick}>
          {this.state.bouncyball <= this.state.count ? <React.Fragment><img className="Prize" src={bouncyball} alt="bouncyball" /> <p className="price">{this.state.bouncyball}</p><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.bouncyball} subtractFromCount={this.subtractFromCount}/></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}>
          {this.state.dino <= this.state.count ? <React.Fragment><img className="Prize" src={dino} alt="dino" /><p className="price">{this.state.dino}</p><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.dino} subtractFromCount={this.subtractFromCount}/></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}>
          {this.state.lizards <= this.state.count ? <React.Fragment><img className="Prize" src={lizards} alt="lizard" /><p className="price">{this.state.lizards}</p><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.lizards} subtractFromCount={this.subtractFromCount}/></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}>
          {this.state.peppa <= this.state.count ? <React.Fragment><img className="Prize" src={peppa} alt="pepa bandaids" /><p className="price">{this.state.peppa}</p><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.pepa} subtractFromCount={this.subtractFromCount}/></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}>
          {this.state.chalk <= this.state.count ? <React.Fragment><img className="Prize" src={chalk} alt="chalk" /><p className="price">{this.state.chalk}</p><Modal show={this.state.show} prize={this.state.prize} count={this.state.count} price={this.state.bouncyball} subtractFromCount={this.subtractFromCount}/></React.Fragment> : null }
          </div>

          <div onClick={this.handlePrizeClick}>
          {this.state.fish <= this.state.count ? <React.Fragment><img className="Prize" src={fish} alt="fish book" /><p className="price">{this.state.fish}</p></React.Fragment> : null }
          </div>

          </div>
      </div>
    );
  }
}

export default App;
