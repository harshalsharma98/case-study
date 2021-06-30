import React, { Component } from 'react'

class UserRow extends Component {

    showAddress(address) {
        return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}, Location: (${address.geo.lat}, ${address.geo.lng})`
    }

    showCompany(company) {
        return `${company.name}, ${company.catchPhrase}, ${company.bs}`
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                <td>{this.props.website}</td>
                <td>{this.props.phone}</td>
                <td>{this.showAddress(this.props.address)}</td>
                <td>{this.showCompany(this.props.company)}</td>
            </tr>
        )
    }
}

export default UserRow
