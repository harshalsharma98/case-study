import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addressHandler = (event) => {
        this.setState({
            address: {
                ...this.state.address,
                [event.target.name] : event.target.value
            }
        })
    }

    geoHandler = (event) => {
        this.setState({
            address : {
                ...this.state.address,
                geo: {
                    ...this.state.address.geo,
                    [event.target.name] : event.target.value
                }
            }
        })
    }

    companyHandler = (event) => {
        this.setState({
            company: {
                ...this.state.company,
                [event.target.name] : event.target.value
            }
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert('Form submitted!!')
        axios.post('http://localhost:8000/users', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <label>Website</label>
                    <input type="text" name="website" value={this.state.website} onChange={this.changeHandler} required></input>
                </div>
                <div>
                    <label>Company's Name</label>
                    <input type="text" name="name" value={this.state.company.name} onChange={this.companyHandler} required></input>
                </div>
                <div>
                    <label>Company's Catch Phrase</label>
                    <input type="text" name="catchPhrase" value={this.state.company.catchPhrase} onChange={this.companyHandler} required></input>
                </div>
                <div>
                    <label>Company's bs</label>
                    <input type="text" name="bs" value={this.state.company.bs} onChange={this.companyHandler} required></input>
                </div>
                <div>
                    <label>Address Street</label>
                    <input type="text" name="street" value={this.state.address.street} onChange={this.addressHandler} required></input>
                </div>
                <div>
                    <label>Address Suite</label>
                    <input type="text" name="suite" value={this.state.address.suite} onChange={this.addressHandler} required></input>
                </div>
                <div>
                    <label>Address City</label>
                    <input type="text" name="city" value={this.state.address.city} onChange={this.addressHandler} required></input>
                </div>
                <div>
                    <label>Address Zipcode</label>
                    <input type="text" name="zipcode" value={this.state.address.zipcode} onChange={this.addressHandler} required></input>
                </div>
                <div>
                    <label>Address Geo Lat</label>
                    <input type="text" name="lat" value={this.state.address.geo.lat} onChange={this.geoHandler} required></input>
                </div>
                <div>
                    <label>Address Geo Lng</label>
                    <input type="text" name="lng" value={this.state.address.geo.lng} onChange={this.geoHandler} required></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
