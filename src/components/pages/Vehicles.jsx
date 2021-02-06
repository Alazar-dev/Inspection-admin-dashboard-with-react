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

                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Registration Number</th>
                                <th scope="col">Maker</th>
                                <th>Model</th>
                                <th>Year</th>
                                <th>Color</th>
                                <th>Owner</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>reg_123</td>
                                <td>toyota</td>
                                <td>Sport</td>
                                <td>2000</td>
                                <td>red</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>reg_456</td>
                                <td>toyota</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>red</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_943</td>
                                <td>witneyhosten@twitter</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_234</td>
                                <td>validenode@twitter</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_087</td>
                                <td>toyota</td>
                                <td>taxi</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_002</td>
                                <td>jtoyota</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>blue</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_432</td>
                                <td>suzuki</td>
                                <td>Automobile</td>
                                <td>2000</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_345</td>
                                <td>suzuki</td>
                                <td>taxi</td>
                                <td>2004</td>
                                <td>green</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_375</td>
                                <td>haundai</td>
                                <td>Automobile</td>
                                <td>2019</td>
                                <td>blue</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_009</td>
                                <td>jamiegrace@twitter</td>
                                <td>2004</td>
                                <td>silver</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_102</td>
                                <td>haundai</td>
                                <td>taxi</td>
                                <td>2000</td>
                                <td>red</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>reg_103</td>
                                <td>toyota</td>
                                <td>taxi</td>
                                <td>2010</td>
                                <td>red</td>
                              </tr>
                            </tbody>
                        </table>

                        
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