import React, { Component } from 'react';
import Form from '../Forms/Form';
 
class User extends Component {


    render() {
        return(
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Test Vehicle</h1>
                </div>
                <Form />
            </div>
        )
    }
}
 
export default User;