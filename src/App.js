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
import star from './Star.png'
import PrizesContainer from './containers/PrizesContainer.js'
import Home from './components/Home.js'
import AddTicketModal from './components/AddTicketModal.js'
import UserContainer from './components/UserContainer.js'

const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"


class App extends Component {

  state = {
    name: '',
    avatar: null,
    count: 0,
    show: false,
    prize: 'b',
    price: 0,
    prizes: [],
    addPrize: false,
    addTicket: false,
    user: '',
    users: [],
    settings: false,
    addChild: false
  }


  componentDidMount() {
  //   fetch( prizeURL , {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(prizes => this.setState({ prizes }))
  // }

  fetch( userURL , {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(users => this.setState({ users }))
}

  handlePrizeSubmit = (e) => {
    e.preventDefault();
  }

  subtractFromCount = () => {
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

handleSettingsCancelClick = () => {
  this.setState({
    settings: false
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

handleSettingsClick = () => {
  this.setState({ settings: !this.state.settings })
}

addChild = () => {
  this.setState({
    addChild: !this.state.addChild
  })
}

submitChild = (e) => {
  e.preventDefault();

  this.setState({
    name: e.target.parentNode.children[7].value,
    avatar: e.target.parentNode.children[9].files[0]
   })
}

postChild = (e) => {
  e.preventDefault();
  console.log(this.state.name)
  console.log(this.state.avatar)
  const child = new FormData();
  child.append('name', this.state.name);
  child.append('avatar', this.state.avatar);
  child.append('count', 0);
  for (var pair of child.entries()) {
    console.log(pair[0]+ ', ' + pair[1]);
}
  fetch( userURL, {
    method: 'POST',
    body: child
  })
  .catch(err => console.log(err));
}

deleteChild = (e) => {
  console.log(e.target)
  // fetch( userURL + id, {
  //   method: 'DELETE',
  // })
  // .then(res => res.json())
  // .then(res => console.log(res))
}


  render() {


    return (
      <div className="App">

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
              <UserContainer count={this.state.count} prizes={this.state.prizes} subtractFromCount={this.subtractFromCount} handlePrizeClick={this.handlePrizeClick} prize={this.state.prize} show={this.state.show} count={this.state.count} plusTicket={this.plusTicket} />
            </Route>
            <Route path="/prizes">
              <PrizesContainer handlePrizeSubmit={this.handlePrizeSubmit} prizes={this.state.prizes} handleAddPrizeClick={this.handleAddPrizeClick} addPrize={this.state.addPrize} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/">
              <Home postChild={this.postChild} submitChild={this.submitChild} showAddChild={this.state.addChild} addChild={this.addChild} settings={this.state.settings} handleSettingsClick={this.handleSettingsClick} handleSettingsCancelClick={this.handleSettingsCancelClick} users={this.state.users} count={this.state.count} handleStarClick={this.handleStarClick} addTicket={this.state.addTicket} plusTicket={this.plusTicket} />
            </Route>
          </Switch>
        </Router>

  </div>
    );
  }
}

export default App;
