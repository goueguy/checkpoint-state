import React, { Component } from 'react';
class Users extends Component {
    state = {
        name:"",
        show: true
    }
    handleDeleteUser(id){
        this.props.deleteUser(id);
    }
    showEditForm(id){
        this.props.editUserForm(id);
    }
    
    render() {
        return (
            <div className="card">
                <div className="user-card">
                    <img src={this.props.picture} alt="picture" style={{height:"50px",width:"50px",borderRadius:"10px"}}/>
                    <div className="card-item">
                        <div>{this.props.name}</div>
                        <div>{this.props.position}</div>
                        <a href="#" onClick={() => this.handleDeleteUser(this.props.id)}>Supprimer</a>
                        <a href="#" onClick={() => this.showEditForm(this.props.id)}>Modifier</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;