import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import '../css/Navbar.css';
class Navbar extends Component {
  render() {
    return (
     <nav>
       <Link to='/' className="brand">Exertracker</Link>
       <div className="nav_elements">
       <Link to='/' className="Exercises">Home</Link>
       <Link to='/edit' className="edit">Edit</Link>
       <Link to='/create' className="create">create</Link>
       <Link to='/users' className="createuser">user</Link>
       </div>
     </nav>
    );
  }
}

export default Navbar;