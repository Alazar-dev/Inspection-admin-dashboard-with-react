import React, { Component } from 'react';
import axios from 'axios';
// import Form from '../Forms/Form';
// import Navigation from './Navigation'
 
class User extends Component {

    constructor(props){
        super(props);
        this.state ={
            vehicle_id: '',
            driver_id: '',
            hand_break: '',
            break_system: '',
            steering_system: '',
            seat_belt: '',
            door: '',
            window: '',
            dashboard_light: '',
            front_mirror_windershield: '',
            baggage_door_mirror: '',
            gear_box: '',
            shock_absorber_condition: '',
            high_low_beam_light: '',
            tail_break_light: '',
            wiper_operation: '',
            car_horn: '',
            side_mirror: '',
            general_body: '',
            driver_performance: '',
            balance: '',
            signal_light_usage: '',
            driver_performance_remark: '',
            vehicle_overall_report: '',
            vehicle_inspection_report: '',
            customer_signature: '',
            approved_send: ''
        }
        // this.onChangeHandler =this.onChangeHandler.bind(this);
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://192.168.1.103:8080/api/inspection-parameter', this.state)
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
                    <div className="col-sm-6 offset-1">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Vehicle</label>
                                <input className="form-control" name="vehicle_id" type="text" value={this.state.vehicle_id} onChange={this.onChangeHandler}/>
                            </div>
                            <div>
                                <label>Driver</label>
                                <input className="form-control" name="driver_id" type="text" value={this.state.driver_id} onChange={this.onChangeHandler}/>
                            </div>
                            <div>
                                <label>Hand break</label>
                                <select className="form-control" name="hand_break" value={this.state.hand_break} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Break System</label>
                                <select className="form-control" name="break_system" value={this.state.break_system} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Steering System</label>
                                <select className="form-control" name="steering_system" value={this.state.steering_system} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Seat Belt</label>
                                <select className="form-control" name="seat_belt" value={this.state.seat_belt} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Door</label>
                                <select className="form-control" name="door" value={this.state.door} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Window</label>
                                <select className="form-control" name="window" value={this.state.window} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Dashboard Light</label>
                                <select className="form-control" name="dashboard_light" value={this.state.dashboard_light} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Front Mirror Windshield</label>
                                <select className="form-control" name="front_mirror_windershield" value={this.state.front_mirror_windershield} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Baggage Door Mirror</label>
                                <select className="form-control" name="baggage_door_mirror" value={this.state.baggage_door_mirror} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Gear Box</label>
                                <select className="form-control" name="gear_box" value={this.state.gear_box} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Shock Absorber Condition</label>
                                <select className="form-control" name="shock_absorber_condition" value={this.state.shock_absorber_condition} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>High Low Beam Light</label>
                                <select className="form-control" name="high_low_beam_light" value={this.state.high_low_beam_light} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Tail Break Light</label>
                                <select className="form-control" name="tail_break_light" value={this.state.tail_break_light} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Wiper Operation</label>
                                <select className="form-control" name="wiper_operation" value={this.state.wiper_operation} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Car Horn</label>
                                <select className="form-control" name="car_horn" value={this.state.car_horn} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Side Mirror</label>
                                <select className="form-control" name="side_mirror" value={this.state.side_mirror} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>General Body</label>
                                <select className="form-control" name="general_body" value={this.state.general_body} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Driver Performance</label>
                                <select className="form-control" name="driver_performance" value={this.state.driver_performance} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Balace</label>
                                <select className="form-control" name="balance" value={this.state.balance} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Signal Light Usage</label>
                                <select className="form-control" name="signal_light_usage" value={this.state.signal_light_usage} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Driver Performance Remark</label>
                                <select className="form-control" name="driver_performance_remark" value={this.state.driver_performance_remark} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Vehicle Overall Report</label>
                                <select className="form-control" name="vehicle_overall_report" value={this.state.vehicle_overall_report} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Vehicle Inspection Report</label>
                                <select className="form-control" name="vehicle_inspection_report" value={this.state.vehicle_inspection_report} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <div>
                                <label>Customer Signature</label>
                                <select className="form-control" name="customer_signature" value={this.state.customer_signature} onChange={this.onChangeHandler}>
                                    <option value="true">Pass</option>
                                    <option value="false">Needs repair</option>
                                </select>            
                            </div>
                            <button style={{ marginLeft: "31rem" }} className="btn-primary mt-3">Save</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
 
export default User;