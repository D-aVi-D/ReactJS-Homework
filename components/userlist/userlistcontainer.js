import React, { Component } from 'react';
import UserAdd from './useradd.js';
import UserList from './userlist.js';
import './userlistcontainer.css'

class UserListContainer extends Component {
    constructor(){
        super();
        this.state = {
            idLowerValue: parseInt(11),
            currentUser: 0,
            currentInputValue: '',
            usersList: [{id: 1, userName: 'External John Doe #1'}, 
                        {id: 2, userName: 'External John Doe #2'},
                        {id: 3, userName: 'External John Doe #3'},
                        {id: 4, userName: 'External John Doe #4'}]
        }
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleMarkUser = this.handleMarkUser.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleAddUser(event) {
        console.log('handleAddUser(event): called');
        if (this.state.currentInputValue != '') {
            let users = [...this.state.usersList, {id: this.state.idLowerValue, userName: this.state.currentInputValue}];
            this.state.idLowerValue++;
            document.getElementById('enteredName').value = '';
            this.setState({ usersList: users });
        }
    }

    handleChangeInput(event) {
        console.log('handleChangeInput(event): called');
        this.setState({currentInputValue: event.target.value});
    }

    handleDeleteUser(event) {
        console.log('Delete handler executed');
        let users = [...this.state.usersList];
        users.splice(this.state.currentUser, 1);
        this.setState({
            currentUser: 0, 
            usersList: users
        });
    }

    handleMarkUser(index) {
         console.log('handleMarkUser(event): called');
         this.setState({currentUser: index})
    }

    shouldComponentUpdate() {
        return true;
    }


    render() {
        debugger;
        let curUser;
        if (this.state.usersList.length > 0) {
            curUser = this.state.usersList[this.state.currentUser].userName
        }
        return (
            <div className='user-list-container container' id="container">
                <UserAdd handleAddUser = {this.handleAddUser} handleChangeInput = {this.handleChangeInput}/>
                {(this.state.usersList.length > 0) ? 
                    <UserList 
                    usersList = {this.state.usersList} 
                        currentUser = {this.state.currentUser} 
                        currentUserName = {curUser} 
                        handleDeleteUser = {this.handleDeleteUser}
                        handleMarkUser = {this.handleMarkUser}/>
                    : null
                }
            </div>)

    }
}

export default UserListContainer