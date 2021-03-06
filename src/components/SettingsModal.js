import React from "react";
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
        <p className="ap-text">Edit Users</p>
        {this.props.showAddChild ? <React.Fragment><input className="ac-option" type="submit" onClick={ this.props.addChild } value="Delete"/><input className="ac-option-white" type="submit" onClick={this.props.addChild } value="Add" /><br/><input className='ap-nameinput' type="text" placeholder="Name" onChange={this.props.submitChild}/><br /><input className="ap-file" type="file" accept="image/*" multiple={false} onChange={this.props.submitChild} /><br/><input className="ap-submit" type="submit" value="Add Child" onClick={this.props.postChild} /></React.Fragment> : <React.Fragment><input className="ac-option-white" type="submit" onClick={ this.props.addChild } value="Delete"/><input className="ac-option" type="submit" onClick={this.props.addChild } value="Add" /><form className="childList">{users}</form></React.Fragment>}

      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </div>
      </div>
      </React.Fragment>

    )
  }
}
