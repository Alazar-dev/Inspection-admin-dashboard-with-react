import React from 'react';
import './Navigation.css'
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink className="nav-top" to="./User">Users</NavLink>
          <NavLink className="nav-top" to="/Inspect">Inspect</NavLink>
       </div>
    );
}

 
export default Navigation;