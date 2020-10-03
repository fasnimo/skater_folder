import React from 'react';
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Breadcrumb } from "react-bootstrap"

const NavBar = () => {
    return (
        <div className="navbar">
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to="/" exact>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/about" exact>About</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/reviews/new" exact>Create Review</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/reviews" exact>Review List</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item><NavLink to="/faq" exact>FAQ</NavLink></Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default NavBar;