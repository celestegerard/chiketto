import React from "react";
export default class SettingsModal extends React.Component {

generateUsers = () => {
  this.props.users.map(user => <input className='ap-upload' type="text" name="Prize-name" placeholder={user.name} /> )
}

  render() {

    const hey = this.generateUsers();

    if(!this.props.settings){
          return null;
      }

    return (

      <React.Fragment>
      <div className="ap-modal">
      <div className="ap-modalmain">
      <p className="ap-text">Edit Child</p>
      <form>
        {hey}
      <input className='ap-upload' type="text" name="Prize-name" value="Elle" /><br />
      <input className='ap-upload' type="text" name="Prize-name" value="Jackson" /><br />
      <input className='ap-upload' type="text" name="Prize-name" value="Wes" /><br />
      <input className="ap-submit" type="submit" value="Add Child" onClick={this.props.addChild }/>
      <p onClick={this.props.cancel} className="ap-no">Cancel</p>
      </form>
      </div>
      </div>
      </React.Fragment>

    )
  }
}
