import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink className="nav-top" to="/Inspect">Inspect</NavLink>
       </div>
    );
}

 
export default Navigation;