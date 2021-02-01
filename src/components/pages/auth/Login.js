import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import {Button} from "@material-ui/core";

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/dashboard' } };

    const handleClick = async e => {
        e.preventDefault();
        localStorage.setItem('token', 'logged-in');
        history.replace(from);
    };

    

    return (
        <div className="Login">
            <header className="Login-header">
                <div className="mb-5" style={{ marginLeft: "9rem" }}>
                    <h2 className="mb-5">Vehicle Inspection System</h2>
                </div>
                <div>
                    <label>Full Name</label>
                    <input className="form-input ml-5" type="text" />
                </div>
                <div className="mt-2">
                    <label>Password</label>
                    <input className="form-input ml-5" type="password"/>
                </div>
                <Button style={{ marginLeft: "28rem" }} className="mt-3" color="inherit" variant="outlined" onClick={handleClick}>
                    Login
                </Button>
            </header>
        </div>
    );
}

export default LoginPage;
