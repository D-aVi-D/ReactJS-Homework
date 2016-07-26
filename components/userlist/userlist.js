import React, { Component } from 'react';
import './userlist.css'
import UserInfo from './userinfo.js';


class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersList: this.props.usersList,
            currentUser: this.props.currentUser,
            currentUserName: this.props.currentUserName,
            handleDeleteUser: this.props.handleDeleteUser
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState = {
            usersList: nextProps.usersList,
            currentUser: nextProps.currentUser,
            currentUserName: nextProps.currentUserName
        }      
    }

    render() {
      const { usersList, currentUser, currentUserName, handleDeleteUser, handleMarkUser} = this.props;
        return (
          (usersList.length > 0) ?
        	<div className="user-list" >
                <div id="user-list-header">Users list</div>
                
                    { usersList.map( (elem, index, array) => {
                        return <div className="user-string" id={index} key={elem.id} onClick={() => {handleMarkUser(index)}}>{elem.userName}</div>
                    })}
                
            
                <UserInfo currentUser = {currentUser} currentUserName = {currentUserName} handleDeleteUser = {handleDeleteUser}/>
        	</div> : null
        )
    }
}

export default UserList