import React from "react";
export default class SettingsModal extends React.Component {

generateUsers = () => {
  this.props.users.map(user => <input className='ap-upload' type="text" name="Prize-name" placeholder={user.name} /> )
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
      <p className="ap-text">Edit Child</p>
      <form>
        {users}
      <div className='ap-upload' type="text" name="Prize-name">Ellie <span>-</span></div><br />
      <div className='ap-upload' type="text" name="Prize-name">Jackson <span>-</span></div><br />
      <div className='ap-upload' type="text" name="Prize-name">Wes <span>-</span></div><br />
      {this.props.showAddChild ? <React.Fragment><div className="addChildSection"></div><input className='ap-upload' type="text" name="name" onChange={this.props.submitChild}/><br /><input type="file" accept="image/*" multiple={false} onChange={this.props.submitChild} /><input className="ap-submit" type="submit" value="Add Child" onClick={this.props.postChild} /></React.Fragment> : <input className="ap-submit" type="submit" value="Add Child" onClick={this.props.addChild }/> }
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>

    )
  }
}
