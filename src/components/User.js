import React from "react";
import star from '../Star.png'
import ellie from '../AvatarEllie.jpg'
import bouncyball from '../prizes/bouncyball.jpg';
import dino from '../prizes/dino.jpg'
import lizards from '../prizes/lizards.jpg'
import peppa from '../prizes/peppabandaid.jpg'
import chalk from '../prizes/chalk.jpg'
import fish from '../prizes/fish.jpg'
import Modal from '../components/Modal'

export default class User extends React.Component {


  render() {
    return (
      <React.Fragment>
      <div className="MeterBlue" >
      <img className="Profile" src={ellie} />
      <div className="count" onClick={this.props.plusTicket} >
      <img className="count" src={star} alt="Ellie" />
      <div className="counter" alt="Ellie">{this.props.count}</div>
      </div>
      </div>

      <div>

      <div onClick={this.props.handlePrizeClick} >
      {this.props.bouncyball <= this.props.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={bouncyball} alt="bouncyball"  /><div className="yellow-sticker-user"><p className="price-user">{this.props.bouncyball}</p></div></div></React.Fragment> : null }
      </div>

      <Modal subtractFromCount={this.props.subtractFromCount} show={this.props.show} prize={this.props.prize} count={this.props.count} price={this.props.bouncyball} />

      <div onClick={this.props.handlePrizeClick}  >
      {this.props.dino <= this.props.count ? <React.Fragment><div class="PrizeContainer" ><img className="Prize" src={dino} alt="dino"  /><div className="yellow-sticker-user"><p className="price-user">{this.props.dino}</p></div></div></React.Fragment> : null }
      </div>

      <div onClick={this.props.handlePrizeClick}  >
      {this.props.lizards <= this.props.count ? <React.Fragment><div class="PrizeContainer" ><img className="Prize" src={lizards} alt="lizards"  onClick={this.props.handlePrizeClick} /><div className="yellow-sticker-user"><p className="price-user">{this.props.lizards}</p></div></div></React.Fragment> : null }
      </div>

      <div onClick={this.props.handlePrizeClick}  >
      {this.props.peppa <= this.props.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={peppa} alt="peppa" onClick={this.props.handlePrizeClick}  /><div className="yellow-sticker-user"><p className="price-user">{this.props.peppa}</p></div></div></React.Fragment> : null }
      </div>

      <div onClick={this.props.handlePrizeClick}  >
      {this.props.chalk <= this.props.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={chalk} alt="chalk" onClick={this.props.handlePrizeClick}  /><div className="yellow-sticker-user"><p className="price-user">{this.props.chalk}</p></div></div></React.Fragment> : null }
      </div>

      <div onClick={this.props.handlePrizeClick} >
      {this.props.fish <= this.props.count ? <React.Fragment><div class="PrizeContainer"><img className="Prize" src={fish} alt="fish" /><div className="yellow-sticker-user"><p className="price-user">{this.props.fish}</p></div></div></React.Fragment> : null }
      </div>
      </div>

      </React.Fragment>
    )
  }
}
