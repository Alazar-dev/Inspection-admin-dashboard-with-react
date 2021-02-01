import React, { Component } from 'react';
import axios from 'axios';

class Drivers extends Component{

    constructor(props){
        super(props);
        this.state = {
            
            first_name: '',
            last_name: '',
            phone_number: '',
            age: '',
            gender: 'male',
            birth_date: '',
            plate_number: '',
            license_number: '',
            photo: ''
        }
    }

    state = {
        loading: true,
        drivers: []
    }

    async componentDidMount(){
        const url = "http://192.168.1.105:8080/api/driver";
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        this.setState({person: data.results, loading: false})
    }

    handlefirstNameChange = (e) => {
        this.setState({
            first_name: e.target.value
        })
    }

    handlelastNameChange =(e) => {
        this.setState({
            last_name: e.target.value
        })
    }

    handlephoneNumberChange = (e) => {
        this.setState({
            phone_number: e.target.value
        })
    }

    handleageChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handlegenderChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    handlebirthDateChange = (e) => {
        this.setState({
            birth_date: e.target.value
        })
    }

    handleplateNumberChange = (e) => {
        this.setState({
            plate_number: e.target.value
        })
    }

    handlelicenseNumberChange = (e) => {
        this.setState({
            license_number: e.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://192.168.1.105:8080/api/driver', this.state)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })

    }

    render() {
     return (
         <div className="container">
            <div className="row">
                <div className="col col-sm-6">
                    {/* <h2 className="mt-5">Registered Drivers</h2>
                    {this.state.loading || !this.state.person ? (<div>Loading...</div>) : 
                        (<div>
                            <div>{this.state.person.id}</div>
                            <div>{this.state.person.name.last}</div>
                            <img src={this.state.person.picture.large} alt={this.state.person.name.first + "'s image"} />
                        </div>)
                    } */}
                    
                    <h2>Register Drivers</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>First Name</label>
                            <input className="form-control" type="text" value={this.state.firstName} onChange={this.handlefirstNameChange} />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input className="form-control" type="text" value={this.state.lastName} onChange={this.handlelastNameChange}/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input className="form-control" type="phone" value={this.state.phoneNumber} onChange={this.handlephoneNumberChange}/>
                        </div>
                        <div>
                            <label>Age</label>
                            <input className="form-control" type="number" value={this.state.age} onChange={this.handleageChange} />
                        </div>
                        <div>
                            <label>Sex</label>
                            <select className="form-control" value={this.state.gender} onChange={this.handlegenderChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label>Birth Date</label>
                            <input className="form-control" value={this.state.birth_date} onChange={this.handlebirthDateChange} type="date"  />
                        </div>
                        <div>
                            <label>Plate Number</label>
                            <input className="form-control" value={this.state.plateNumber} onChange={this.handleplateNumberChange} />
                        </div>
                        <div>
                            <label>License Number</label>
                            <input className="form-control" value={this.state.licenseNumber} onChange={this.handlelicenseNumberChange} />
                        </div>

                        <button className="btn-primary mt-3">Register</button>
                    </form>
                </div>
            </div>


         </div>
     )
    }

}


export default Drivers;