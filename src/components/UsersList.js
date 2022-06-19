import React, { Component } from 'react';
import Users from "./Users";

class UsersList extends Component {
    render() {
        return (
            <div className="users mt-4">
                {
                    this.props.users.map(item=>
                        <Users key={item.id} id={item.id} name={item.name} position={item.position} picture={item.picture} deleteUser={this.props.deleteUser} editUserForm={this.props.editUserForm}/>
                    )
                }
            </div>
        );
    }
}

export default UsersList;