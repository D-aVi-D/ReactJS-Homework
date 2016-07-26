import React, { Component } from 'react';
import './useradd.css'


class UserAdd extends Component {
    constructor(props){
        super(props);
    }


    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }


    render() {
        return (
        	<div className='user-add-container'>
              <div id="username-label">Enter new <br/>UserName: </div>
              <input id="enteredName" type="text" placeholder="Enter Name"  onChange={this.props.handleChangeInput}/>
              <button id="addNameButton" type="submit" onClick={ this.props.handleAddUser }>
                Add New User
              </button>
          </div>
        )
    }
}

export default UserAdd