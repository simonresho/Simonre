import React from 'react'; 
import { NavbarBrand } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Service1 from '../images/resho.png';

function Navbar() {
    return(
        <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">  
            <NavbarBrand><img src={Service1} className="simo" /></NavbarBrand>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div  class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb- mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/about" class="nav-link active">About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/contact" class="nav-link active">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
     );
}

export default Navbar;