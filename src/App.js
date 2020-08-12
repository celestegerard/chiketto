import React, { Component } from 'react';
import './App.css';
import jackson from './jackson.jpeg';



class App extends Component {

  state = {
    count: 0
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
      </div>
    );
  }
}

export default App;
