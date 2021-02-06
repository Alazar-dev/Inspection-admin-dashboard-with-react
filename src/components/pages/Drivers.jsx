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

                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th>Phone</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Birth Date</th>
                                <th>Plate Nmber</th>
                                <th>License Number</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Alazar</td>
                                <td>Tadesse</td>
                                <td>+251988471703</td>
                                <td>21</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Alazar</td>
                                <td>Tadesse</td>
                                <td>+251988471703</td>
                                <td>21</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Dawit</td>
                                <td>Getachew</td>
                                <td>+2519346534</td>
                                <td>34</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>reg_234</td>
                                <td>validenode@twitter</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">5</th>
                                <td>Dawit</td>
                                <td>Getachew</td>
                                <td>+2519346534</td>
                                <td>34</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">6</th>
                                <td>reg_002</td>
                                <td>jtoyota</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>blue</td>
                              </tr>
                              <tr>
                                <th scope="row">7</th>
                                <td>reg_432</td>
                                <td>suzuki</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">8</th>
                                <td>Dawit</td>
                                <td>Getachew</td>
                                <td>+2519346534</td>
                                <td>34</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">9</th>
                                <td>reg_375</td>
                                <td>haundai</td>
                                <td>Automobile</td>
                                <td>2019</td>
                                <td>blue</td>
                              </tr>
                              <tr>
                                <th scope="row">10</th>
                                <td>Abera</td>
                                <td>Mola</td>
                                <td>+2519346534</td>
                                <td>34</td>
                                <td>Male</td>
                                <td>07-11-2000</td>
                                <td>AA234567</td>
                                <td>123</td>
                              </tr>
                              <tr>
                                <th scope="row">11</th>
                                <td>reg_102</td>
                                <td>haundai</td>
                                <td>taxi</td>
                                <td>2000</td>
                                <td>red</td>
                              </tr>
                              <tr>
                                <th scope="row">12</th>
                                <td>reg_103</td>
                                <td>toyota</td>
                                <td>taxi</td>
                                <td>2010</td>
                                <td>red</td>
                              </tr>
                            </tbody>
                        </table>
                    
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