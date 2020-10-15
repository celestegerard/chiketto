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
import UserScreenSelect from './UserScreenSelect.png'
import PrizeScreenSelect from './PrizeScreenSelect.png'


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
    userid:'',
    users: [],
    settings: false,
    addChild: false,
    status: '',
    fetch: [],
    page: false,
    buyPrize: false,
    homepage: true,
    showDeletePrize: false
  }


  componentDidMount() {

    Promise.all([
      fetch( prizeURL ),
      fetch( userURL ),
    ]).then((results) =>
    Promise.all(results.map(r => r.json()))
  ).then(d => this.setState({ prizes: d[0], users: d[1] })
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
    prize.append('prizeimage', this.state.prizeimage);
    prize.append('count', 0);
    fetch( prizeURL, {
      method: 'POST',
      body: prize
    })
    .catch(err => console.log(err));
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
    const user = e.target.parentNode.id
    const count = e.target.innerHTML
    const userid = e.target.id

    this.setState({ count , user, userid  })
    this.setState({ addTicket: !this.state.addTicket})

  };

  plusTicket = (e) => {

    const id = this.state.userid

    console.log(id)

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

  this.setState({ addTicket: !this.state.addTicket })
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
  this.setState({ homepage: true })
  console.log('it hit!')
}

handleAddPrizeClick = () => {
  this.setState({
    addPrize: !this.state.addPrize
  })
}

handleBuyPrizeClick = () => {
  this.setState({
    buyPrize: !this.state.buyPrize
  })
}

handleSettingsCancelClick = () => {
  this.setState({
    settings: false
  })
}

AddStarNoClick = () => {
  this.setState({ addTicket: !this.state.addTicket })
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
  e.preventDefault()

  this.setState({
    name: e.target.parentNode.children[6].value,
    avatar: e.target.parentNode.children[8].files[0]
   })
}


deleteChild = (e) => {
  e.preventDefault();
  const id = e.target.id
  fetch( userURL + '/' + id, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log(res))
}

handlePrizePageClick = () => {
  this.setState({ homepage: false })
}

deletePrize = (e) => {
  e.preventDefault();
  const id = e.target.id
  fetch( prizeURL + '/' + id, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log(res))
}

handleShowDeletePrize = () => {
  this.setState({ showDeletePrize: !this.state.deletePrize })
}

closeDeletePrize = () => {
  this.setState({ showDeletePrize: false })
}

  render() {
console.log(this.state.showDeletePrize)
    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to="/">
              { this.state.homepage ? <img className="nav-button-star-yellow" src={UserScreenSelect} /> : null }
              <img className="nav-button-star" onClick={this.handleUserClick} src={UserScreen} />
            </Link>
            <Link to="/prizes">
              { !this.state.homepage ? <img className="nav-button-circle-yellow" src={PrizeScreenSelect} /> : null }
              <img className="nav-button-circle" onClick={this.handlePrizePageClick} addTicket={this.state.addTicket} user={this.state.user} src={PrizeScreen} />
            </Link>
          </div>
          <Switch>
            <Route path="/users">
              <UsersContainer users={this.state.users}  count={this.state.count} prizes={this.state.prizes} subtractFromCount={this.subtractFromCount} handlePrizeClick={this.handlePrizeClick} prize={this.state.prize} show={this.state.show} count={this.state.count} plusTicket={this.plusTicket} />
            </Route>
            <Route path="/prizes">
              <PrizesContainer handleShowDeletePrize={this.handleShowDeletePrize} showDeletePrize={this.state.showDeletePrize} closeDeletePrize={this.closeDeletePrize} deletePrize={this.deletePrize} postPrize={this.postPrize} handlePrizeSubmit={this.handlePrizeSubmit} prizes={this.state.prizes} handleAddPrizeClick={this.handleAddPrizeClick} addPrize={this.state.addPrize} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/">
              <Home user={this.state.user} cancel={this.AddStarNoClick} fetch={this.state.fetch} deleteChild={this.deleteChild} postChild={this.postChild} submitChild={this.submitChild} showAddChild={this.state.addChild} addChild={this.addChild} settings={this.state.settings} handleSettingsClick={this.handleSettingsClick} handleSettingsCancelClick={this.handleSettingsCancelClick} users={this.state.users} count={this.state.count} incrementCount={this.incrementCount} handleStarClick={this.handleStarClick} addTicket={this.state.addTicket} plusTicket={this.plusTicket} />
            </Route>
          </Switch>
        </Router>

  </div>
    );
  }
}

export default App;
