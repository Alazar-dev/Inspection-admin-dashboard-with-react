import React, { Component } from 'react';

class VehicleForm extends Component {

    state = {
        registrationNumber: '',
        maker: '',
        model:'',
        year: '',
        color: '',
        ownerName: ''
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Vehicle Registration</h2>
                        <form className="form mt-5"> 
                            <div>
                                <label htmlFor="registrationNumber">Registration Number</label>
                                <input className="form-control" type="number"/>
                            </div>
                            <div>
                                <label htmlFor="maker">Maker</label>
                                <input className="form-control" type="text" name="maker"/>
                            </div>
                            <div>
                                <label htmlFor="model">Model</label>
                                <input className="form-control" type="text"/>                            
                            </div>
                            <div>
                                <label htmlFor="year">Year</label>
                                <input className="form-control" type="year" name="year" />
                            </div>
                            <div>
                                <label htmlFor="color">Color</label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div>
                                <label htmlFor="name">Owner Name</label>
                                <input className="form-control" type="text"/>                            
                            </div>
                        </form>
                        <h2 className="mt-5">Registered Vehicles</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default VehicleForm;