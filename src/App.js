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
import UsersContainer from './components/UsersContainer.js'
import UserScreen from './UserScreen.png'
import PrizeScreen from './PrizeScreen.png'

const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"


class App extends Component {

  state = {
    name: '',
    avatar: null,
    count: 0,
    title: '',
    price: 0,
    prizeimage: null,
    show: false,
    prize: '',
    prizes: [],
    addPrize: false,
    addTicket: false,
    user: '',
    users: [],
    settings: false,
    addChild: false,
    status: '',
    fetch: []
  }


  async componentDidMount() {

    Promise.all([
      fetch( prizeURL ),
      fetch( userURL ),
    ]).then((results) =>
    Promise.all(results.map(r => r.json()))
  ).then(res => res.map(data => this.setState({ fetch: [...this.state.fetch, data ]}))
  .then(this.setState({ users: this.state.fetch[1], prizes: this.state.fetch[0] }))
)
}


  handlePrizeSubmit = (e) => {
    e.preventDefault();
    const title = e.target.parentNode.children[0].value
    const price = e.target.parentNode.children[2].value.split(" ")[0]
    const prizeimage = e.target.parentNode.children[3].files[0]
    this.setState({ title, price, prizeimage })
  }

  postPrize = (e) => {
    e.preventDefault();
    const prize = new FormData();
    prize.append('title', this.state.title);
    prize.append('price', this.state.price);
    prize.append('count', 0);
    fetch( prizeURL, {
      method: 'POST',
      body: prize
    })
    .catch(err => console.log(err));
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

  incrementCount = (e) => {
    e.preventDefault()
    const id = e.target.id
    const count = e.target.innerHTML
    this.setState({ count })

    fetch( userURL + '/' + id, {
    method: 'PATCH',
    body: JSON.stringify({
      count: ++this.state.count
    }),
    headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
  })
  .then(res => res.json())
  .then(json => console.log(json))

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
  const child = new FormData();
  child.append('name', this.state.name);
  child.append('avatar', this.state.avatar);
  child.append('count', 0);
  fetch( userURL, {
    method: 'POST',
    body: child
  })
  .catch(err => console.log(err));
}

deleteChild = (e) => {
  const id = e.target.id
  fetch( userURL + '/' + id, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log(res))
}


  render() {
    console.log("USAHS", this.state.users)
    console.log("PRIZES", this.state.prizes)
    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/">
              <img className="nav-button" onClick={this.handleUserClick} src={UserScreen} />
            </Link>
            <Link to="/prizes">
              <img className="nav-button" onClick={this.handlePrizeBoxClick} addTicket={this.state.addTicket} user={this.state.user} src={PrizeScreen} />
            </Link>
          </div>
          <Switch>
            <Route path="/users">
              <UsersContainer users={this.state.user1}  count={this.state.count} prizes={this.state.prizes} subtractFromCount={this.subtractFromCount} handlePrizeClick={this.handlePrizeClick} prize={this.state.prize} show={this.state.show} count={this.state.count} plusTicket={this.plusTicket} />
            </Route>
            <Route path="/prizes">
              <PrizesContainer postPrize={this.postPrize} handlePrizeSubmit={this.handlePrizeSubmit} prizes={this.state.prizes} handleAddPrizeClick={this.handleAddPrizeClick} addPrize={this.state.addPrize} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/">
              <Home fetch={this.state.fetch} deleteChild={this.deleteChild} postChild={this.postChild} submitChild={this.submitChild} showAddChild={this.state.addChild} addChild={this.addChild} settings={this.state.settings} handleSettingsClick={this.handleSettingsClick} handleSettingsCancelClick={this.handleSettingsCancelClick} users={this.state.users} count={this.state.count} incrementCount={this.incrementCount} handleStarClick={this.handleStarClick} addTicket={this.state.addTicket} plusTicket={this.plusTicket} />
            </Route>
          </Switch>
        </Router>

  </div>
    );
  }
}

export default App;
