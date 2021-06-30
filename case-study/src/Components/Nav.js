import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {

    render() {
        const navStyle = {
            color: 'white'
        }

        return (
            <nav>
                <h3>Navigate</h3>
                <ul className="navigation-links">
                    <Link style={navStyle} to='/users'>
                        <li>Users</li>
                    </Link>
                    <Link style={navStyle} to='/form'>
                        <li>Form</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
