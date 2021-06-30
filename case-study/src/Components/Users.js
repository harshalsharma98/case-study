import axios from 'axios'

import React, { Component } from 'react'
import UserRow from './UserRow'
import './Users.css'

class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }
    

    componentDidMount() {
        axios.get('http://localhost:8000/users').then(response => {
            console.log(response.data);
            this.setState({
                users: response.data
            })
        })
    }

    render() {
        return (
            <table>
                <caption>Users</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user) => {
                    return <UserRow name={user.name}
                    key={user.id} 
                    id={user.id} 
                    email={user.email} 
                    phone={user.phone} 
                    username={user.username} 
                    website={user.website}
                    address={user.address}
                    company={user.company}>
                    </UserRow>
                })}
                </tbody>
            </table>
        )
    }
}

export default Users
