import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''

        }
    }

    handlenameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleemailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlepasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://192.168.1.105:8080/api/user', this.state)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        return  (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-sm-3">
                                    <button className="btn-primary">Create</button>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn-warning">Edit</button>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn-danger">Delete</button>
                                </div>
                                <div className="col-sm-3">
                                    <button className="btn-secondary">Export</button>
                                </div>                                                                        
                            </div>
                        </div> */}
                        <div>
                            <h2 className="mt-5">Register Users</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label>Name</label>
                                    <input className="form-control" type="text" value={this.state.name} onChange={this.handlenameChange}/>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input className="form-control" type="email" value={this.state.email} onChange={this.handleemailChange}/>
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input className="form-control" type="password" value={this.state.password} onChange={this.handlepasswordChange}/>
                                </div>
                                <button style={{ marginLeft: "29rem" }} className="mt-5 btn-primary">Register</button>
                            </form>                        
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default User;