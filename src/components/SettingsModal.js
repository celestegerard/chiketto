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
      <p className="ap-text">Edit Child</p>
      <form className="childList">
        {users}
      {this.props.showAddChild ? <React.Fragment><input className='ap-upload' type="text" placeholder="Name" onChange={this.props.submitChild}/><br /><input className="file-upload" type="file" accept="image/*" multiple={false} onChange={this.props.submitChild} /><input className="ap-submit" type="submit" value="Add Child" onClick={this.props.postChild} /></React.Fragment> : <input className="ap-submit" type="submit" value="Add Child" onClick={this.props.addChild }/> }
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>

    )
  }
}
