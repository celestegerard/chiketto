import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import PrizesContainer from './containers/PrizesContainer.js'
import Home from './components/Home.js'
import UsersContainer from './components/UsersContainer.js'
import UserScreen from './UserScreen.png'
import PrizeScreen from './PrizeScreen.png'
import UserScreenSelect from './UserScreenSelect.png'
import PrizeScreenSelect from './PrizeScreenSelect.png'
import LoginButton from './LoginButton.png'
import LoginContainer from './containers/LoginContainer.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'


const prizeURL = "http://localhost:3000/api/v1/prizes"
const userURL = "http://localhost:3000/api/v1/users"
const parentURL = "http://localhost:3000/api/v1/parents"



class App extends Component {

  state = {
    people: {},
    name: '',
    avatar: null,
    count: 0,
    title: '',
    price: 0,
    prizeimage: null,
    show: false,
    prize: '',
    prizeid: '',
    prizes: [],
    addPrize: false,
    addTicket: false,
    user: '',
    userid:'',
    users: [],
    settings: false,
    addChild: true,
    editChild: false,
    status: '',
    fetch: [],
    page: false,
    buyPrize: false,
    homepage: true,
    showDeletePrize: false,
    parentid: 0,
    parents: [],
    massprizes: [],
    massusers: [],
    login: false
  }


  componentDidMount() {

    Promise.all([
      fetch( prizeURL ),
      fetch( userURL ),
      fetch( parentURL )
    ]).then((results) =>
    Promise.all(results.map(r => r.json()))
  ).then(d => this.setState({ massprizes: d[0], massusers: d[1], parents: d[2] })
)
}

loggedin = () => {
  this.setState({ login: true })
}

postChild = (e) => {
  e.preventDefault()
  const child = new FormData();
  child.append('name', this.state.name);
  child.append('avatar', this.state.avatar);
  child.append('count', 0);
  child.append('parent_id', this.state.parentid);

  const postChild = async () => {
    const res = await fetch( userURL, { method: 'POST', body: child })
    const json = await res.json()
    const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
    const loadjson = await Promise.all(loadres.map(r => r.json()))
    const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
  }
  postChild()
  this.setState({ settings: false, addChild: false })
}

postBuyPrize = (e) => {
  e.preventDefault()
  const username = e.target.parentNode.children[1].value
  const finduser = this.state.users.find( user => user.name === username )
  const userid = finduser.id
  const count = finduser.count

  const findprize = this.state.prizes.find( prize => prize.title === this.state.prize)
  const prizeid = findprize.id

  this.setState({ count, userid, prizeid })


  const postBuyPrize = async () => {
    const id = await this.state.userid
    const res = await fetch( userURL + '/' + id, { method: 'PATCH', body: JSON.stringify({ count: this.state.count - this.state.price }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    const json = await res.json()
    const deleteprize = await fetch( prizeURL + '/' + this.state.prizeid, { method: 'DELETE' })
    const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
    const loadjson = await Promise.all(loadres.map(r => r.json()))
    const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
  }
  postBuyPrize()
  this.setState({ buyPrize: false })

}

  handlePrizeSubmit = (e) => {
    e.preventDefault();
    const title = e.target.parentNode.children[0].value
    const price = e.target.parentNode.children[2].value.split(" ")[0]
    const prizeimage = e.target.parentNode.children[4].files[0]
    this.setState({ title, price, prizeimage })
  }

  postPrize = (e) => {
    e.preventDefault();
    const prize = new FormData();
    prize.append('title', this.state.title);
    prize.append('price', this.state.price);
    prize.append('prizeimage', this.state.prizeimage);
    prize.append('parent_id', this.state.parentid);

    const postPrize = async () => {
      const res = await fetch( prizeURL, { method: 'POST', body: prize })
      const json = await res.json()
      const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
      const loadjson = await Promise.all(loadres.map(r => r.json()))
      const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
    }
    postPrize()
    this.setState({ addPrize: false })
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

    const patchStar = async () => {
      const id = this.state.userid
      const res = await fetch( userURL + '/' + id, { method: 'PATCH', body: JSON.stringify({ count: ++this.state.count }), headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      const json = await res.json()
      const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
      const loadjson = await Promise.all(loadres.map(r => r.json()))
      const prizes = loadjson[0].filter(prize => prize.parent_id === this.state.parentid)
      const users = loadjson[1].filter(user => user.parent_id === this.state.parentid)
      console.log(prizes)
      const state = await this.setState({ prizes, users })
    }
    patchStar()
    this.setState({ addTicket: !this.state.addTicket })

  }


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
  console.log('whats good!')
}

handleAddPrizeClick = () => {
  this.setState({
    addPrize: !this.state.addPrize
  })
}

handleBuyPrizeClick = (e) => {
  const prizeid = e.target.id
  const price = e.target.parentNode.children[1].children[0].innerHTML
  const prize = e.target.alt
  this.setState({ prize, price, prizeid })
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
    name: e.target.parentNode.children[4].value,
    avatar: e.target.parentNode.children[6].files[0]
   })
}


deleteChild = (e) => {
  e.preventDefault();
  const id = e.target.id

  const deleteChild = async () => {
    const res = await fetch( userURL + '/' + id, { method: 'DELETE' })
    const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
    const loadjson = await Promise.all(loadres.map(r => r.json()))
    const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
  }
  deleteChild()

  this.setState({ settings: false })
}

deletePrize = (e) => {
  e.preventDefault();
  const id = e.target.id

  const deletePrize = async () => {
    const res = await fetch( prizeURL + '/' + id, { method: 'DELETE'})
    const loadres = await Promise.all([ fetch( prizeURL ), fetch( userURL )])
    const loadjson = await Promise.all(loadres.map(r => r.json()))
    const state = await this.setState({ prizes: loadjson[0], users: loadjson[1] })
  }
  deletePrize()

}

handlePrizePageClick = () => {
  this.setState({ homepage: false })
}


handleShowDeletePrize = () => {
  this.setState({
    showDeletePrize: !this.state.deletePrize
   })
}

closeDeletePrize = () => {
  this.setState({ showDeletePrize: false })
}

cancelBuyPrize = () => {
  this.setState({ buyPrize: false })
}

prepBuyPrize = (e) => {
  e.preventDefault()
  console.log(e.target.parentNode.children[1].value)
  const username = e.target.parentNode.children[1].value
  if (username === "Name") {} else {

  const finduser = this.state.users.find( user => user.name === username )
  const userid = finduser.id
  const count = finduser.count

  const findprize = this.state.prizes.find( prize => prize.title === this.state.prize)
  const prizeid = findprize.id

  this.setState({ count, userid, prizeid })
  console.log("else statement is hitting!")
}
}

createAccount = () => {
  console.log('hey bheebhe')
}

onLogoutClick = () => {
  this.setState({ parentid: 0, prizes: [], users: [], login: false })
}

onLoginClick = (name) => {
  this.state.parents.map(parent => parent.name === name ? this.setState({parentid: parent.id}) : this.createAccount() )
  const prizes = this.state.massprizes.filter(prize => prize.parent_id === this.state.parentid)
  const users = this.state.massusers.filter(user => user.parent_id === this.state.parentid)
  this.setState({ prizes, users })
}

  render() {


    return (
      <div className="App">
        <Router>
          { this.state.login ? <Redirect to="/" /> : <Redirect to="/login" /> }
          <div alt ='login' className="nav">
          <Link to="/login">
          <img src={LoginButton} className="nav-button-login" />
          </Link>
            <Link to="/">
              { this.state.homepage ? <img alt="userscreen" className="nav-button-star-yellow" src={UserScreenSelect} /> : null }
              <img alt="nav star" className="nav-button-star" onClick={this.handleUserClick} src={UserScreen} />
            </Link>
            <Link to="/prizes">
              { !this.state.homepage ? <img alt="nav yellow circle" className="nav-button-circle-yellow" src={PrizeScreenSelect} /> : null }
              <img alt="nav button circle" className="nav-button-circle" onClick={this.handlePrizePageClick}  user={this.state.user} src={PrizeScreen} />
            </Link>
          </div>
          <Switch>
          <Route path="/login">
          <LoginContainer loggedin={this.loggedin} loginparentid={this.state.parentid} onLoginClick={this.onLoginClick} onLogoutClick={this.onLogoutClick} />
          </Route>
            <Route path="/prizes">
              <PrizesContainer parentid={this.state.parentid} prepBuyPrize={this.prepBuyPrize} postBuyPrize={this.postBuyPrize} cancelBuyPrize={this.cancelBuyPrize} price={this.state.price} users={this.state.users} prize={this.state.prize} buyPrize={this.state.buyPrize} handleBuyPrizeClick={this.handleBuyPrizeClick} handleShowDeletePrize={this.handleShowDeletePrize} showDeletePrize={this.state.showDeletePrize} closeDeletePrize={this.closeDeletePrize} deletePrize={this.deletePrize} postPrize={this.postPrize} handlePrizeSubmit={this.handlePrizeSubmit} prizes={this.state.prizes} handleAddPrizeClick={this.handleAddPrizeClick} addPrize={this.state.addPrize} bouncyball={this.state.bouncyball} dino={this.state.dino} peppa={this.state.peppa} chalk={this.state.chalk} lizards={this.state.lizards} fish={this.state.fish} />
            </Route>
            <Route path="/">
              <Home parentid={this.state.parentid} user={this.state.user} editChild={this.state.editChild} cancel={this.AddStarNoClick} fetch={this.state.fetch} deleteChild={this.deleteChild} postChild={this.postChild} submitChild={this.submitChild} showAddChild={this.state.addChild} addChild={this.addChild} settings={this.state.settings} handleSettingsClick={this.handleSettingsClick} handleSettingsCancelClick={this.handleSettingsCancelClick} users={this.state.users} count={this.state.count} incrementCount={this.incrementCount} handleStarClick={this.handleStarClick} addTicket={this.state.addTicket} plusticket={this.plusTicket} />
            </Route>
          </Switch>
        </Router>

  </div>
    );
  }
}

export default App;
