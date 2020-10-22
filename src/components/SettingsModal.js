import React from "react";
import whiteplus from '../plus-white.png'
import whitedelete from '../delete-white.png'
export default class SettingsModal extends React.Component {

generateUsers = () => {
  return this.props.users.map(user => <React.Fragment><div className='ap-upload' type="text" name="Prize-name" key={user.id} ><div className="childName">{user.name}</div><div className="deleteChild" onClick={this.props.deleteChild} id={user.id}>-</div></div><br /></React.Fragment> )
}

  render() {

    const users = this.generateUsers();

    if(!this.props.settings){
          return null;
      }

    return (

      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">
        <p className="ap-no">Edit Users</p>
        {this.props.editChild ? <React.Fragment><form className="childList">{users}</form></React.Fragment> : <img className="ac-option" type="submit" src={whitedelete} onClick={this.props.addChild } /> }
        {this.props.showAddChild ? <React.Fragment><input className='ap-nameinput' type="text" placeholder="Name" onChange={this.props.submitChild}/><br /><input className="ap-file" type="file" accept="image/*" multiple={false} onChange={this.props.submitChild} /><br/><input className="ap-submit" type="submit" value="Add Child" onClick={this.props.postChild} /></React.Fragment> : <img className="ac-option" type="submit" src={whiteplus} onClick={this.props.addChild } />}

      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </div>
      </div>
      </React.Fragment>

    )
  }
}
