import React, { Component } from 'react';
import './userinfo.css'

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      currentUserName: this.props.currentUserName,
      handleDeleteUser: this.props.handleDeleteUser
    };
  }

 
  render() {
    return (
      <div className="user-info">
          User detailed information: User ID: {this.props.currentUser};<br/>User Name: {this.props.currentUserName}
          <button id="delElement" onClick={ this.props.handleDeleteUser }>
            Delete User
          </button>
       </div>
    );
  }
}

export default UserInfo