import React, { Component } from 'react';
import icon from '../assets/images/edit.svg'
class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name
        }
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({name: event.target.value});
    }
    handleUpdateUser(){
        let user = {
            id:this.props.userId,
            name:this.state.name
        }
        this.props.saveUpdate(user);
    }   
    render() {
        if(!this.props.show){
            return (
                
                <div>
                    <div className="form-group mt-3 d-flex addForm">
                        <input type="text" className="form-control" placeholder="Modifier...." onChange={(e)=>this.handleChange(e)} value={this.state.name}/>
                        <a href="#">
                            <img src={icon} alt="icon edit" onClick={()=>this.handleUpdateUser()}/>
                        </a>
                    </div>
                </div>
            );
        }
    }
}

export default EditUser;