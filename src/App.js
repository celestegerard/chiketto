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



class App extends Component {

  state = {
    count: 0,
    bouncyball: 2,
    dino: 3,
    peppa: 4,
    chalk: 5,
    lizards: 6,
    fish: 7
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ticket</h1>
        </header>
        <img className="Profile" src={jackson} alt="jackson" />
          <div className="count">
          <button onClick={this.handleMinusClick} className="minus">-</button>
          <div className="counter">{this.state.count}</div>
          <button onClick={this.handlePlusClick} className="plus">+</button>
          </div>

          <div>
          {this.state.bouncyball <= this.state.count ? <React.Fragment><img className="Prize" src={bouncyball} alt="bouncyball" /> <p className="price">{this.state.bouncyball}</p> </React.Fragment> : null }
          {this.state.dino <= this.state.count ? <React.Fragment><img className="Prize" src={dino} alt="bouncyball" /><p className="price">{this.state.dino}</p></React.Fragment> : null }
          {this.state.lizards <= this.state.count ? <React.Fragment><img className="Prize" src={lizards} alt="bouncyball" /><p className="price">{this.state.lizards}</p></React.Fragment> : null }
{this.state.peppa <= this.state.count ? <React.Fragment><img className="Prize" src={peppa} alt="bouncyball" /><p className="price">{this.state.peppa}</p></React.Fragment> : null }
{this.state.chalk <= this.state.count ? <React.Fragment><img className="Prize" src={chalk} alt="bouncyball" /><p className="price">{this.state.chalk}</p></React.Fragment> : null }
{this.state.fish <= this.state.count ? <React.Fragment><img className="Prize" src={fish} alt="bouncyball" /><p className="price">{this.state.fish}</p></React.Fragment> : null }
          </div>
      </div>
    );
  }
}

export default App;
