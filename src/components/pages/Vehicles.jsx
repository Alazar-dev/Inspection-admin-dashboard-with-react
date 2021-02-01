import React, { Component } from 'react';
import axios from 'axios';

class Vehicles extends Component {
    constructor(props){
        super(props);
        this.state = {
            registration_number: '',
            maker: '',
            model: '',
            year: '',
            color: '',
            owner_name: ''
        };
    }

    state = {
        loading: true,
        vehicles: []
    }

    async componentDidMount(){
        const url = "http://192.168.1.105:8080/api/vehicle";
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        this.setState({person: data.results, loading: false})
    }

    handleregistrationNumberChange = (e) => {
        this.setState({
            registration_number: e.target.value
        })
    }
    handlemakerChange = e => {
        this.setState({
            maker: e.target.value
        })
    }

    handlemodelChange = e => {
        this.setState({
            model: e.target.value
        })
    }

    handleyearChange = e => {
        this.setState({
            year: e.target.value
        })
    }

    handlecolorChange = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleownerName = e => {
        this.setState({
            owner_name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://192.168.1.105:8080/api/vehicle', this.state)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
        return (
            
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                    {/* <h2>Registered Vehicles</h2>
                    {this.state.loading || !this.state.person ? (<div>Loading...</div>) :
                        (<div>
                            <div>{this.state.person.id}</div>
                            <div>{this.state.person.name.last}</div>
                            <img src={this.state.person.picture.large} alt={this.state.person.name.first + "'s image"} />
                        </div>)
                    } */}

                        <h2>Vehicle Registration</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Registration Number</label>
                                <input className="form-control" type="text" value={this.state.registration_number} onChange={this.handleregistrationNumberChange} />
                            </div>
                            <div>
                                <label>Maker</label>
                                <input className="form-control" type="text" value={this.state.maker} onChange={this.handlemakerChange}/>
                            </div>
                            <div>
                                <label>Model</label>
                                <input className="form-control" type="text" value={this.state.model} onChange={this.handlemodelChange}/>
                            </div>
                            <div>
                                <label>Year</label>
                                <input className="form-control" type="text" value={this.state.year} onChange={this.handleyearChange}/>
                            </div>
                            <div>
                                <label>Color</label>
                                <input className="form-control" type="text" value={this.state.color} onChange={this.handlecolorChange}/>
                            </div>
                            <div>
                                <label>Owner</label>
                                <input className="form-control" type="text" value={this.state.owner_name} onChange={this.handleownerName}/>
                            </div> 
                            <button className="mt-5 btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Vehicles;