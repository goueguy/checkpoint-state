import { Component } from 'react';
import EditUser from './EditUser';
const logo = 'https://cdn.pixabay.com/photo/2022/05/26/19/14/child-7223632_960_720.jpg';

class AddUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            isShow:true
        };
        this.getInputValue = this.getInputValue.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }
    getInputValue(event){
        this.setState({name:event.target.value});
    }

    handleAddUser(){
        let user = {
            id : new Date(),
            name : this.state.name,
            picture : logo,
            position : 'CEO Tesla'
        }
        this.props.addUser(user);
        //empty name field after adding
        this.state.name= ""
    }
    render(){
        
        if(this.state.isShow==this.props.show){
            return (
                <div className="form-group mt-3 d-flex addForm">
                    <input type="text" className="form-control" placeholder="Ecrire...." onChange={this.getInputValue} value={this.state.name}/>
                    <svg onClick={this.handleAddUser} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-clipboard2-plus-fill" viewBox="0 0 16 16">
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8.5 6.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5a.5.5 0 0 1 1 0Z"/>
                    </svg>
                </div>
            )
        }
    }
}


export default AddUser;