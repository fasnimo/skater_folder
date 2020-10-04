import React from 'react';
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

const NavBar = () => {
    return (
        <div className="navbar">
            <Container>
              
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/about" exact>About</NavLink>
                    <NavLink to="/reviews/new" exact>Submit Review</NavLink>
                    <NavLink to="/reviews" exact>Review List</NavLink>
                    <NavLink to="/faq" exact>FAQ</NavLink>
                
            </Container>
        </div>
    );
};

export default NavBar;