import React from 'react';
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" exact>Home</NavLink> | <NavLink to="/reviews/new" exact>Create Review</NavLink> | <NavLink to="/reviews" exact>Review List</NavLink>
        </div>
    );
};

export default NavBar;