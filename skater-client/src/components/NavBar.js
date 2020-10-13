import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Styles = styled.div`
    .navbar {
        background-color: #1000;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        color: #000;
        &:hover {
            color: grey
        }
    }

`;

const NavBar = () => {
    return (
        <div className="navbar">
            <Container>
                    <Styles>
                    <Navbar expand="lg">
                        <Navbar.Brand>SkateFinder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/" >Home</Nav.Link>
                                    <Nav.Link href="/about" >About</Nav.Link>
                                    <Nav.Link href="/reviews/new" >Submit Review</Nav.Link>
                                    <Nav.Link href="/reviews" >Reviews</Nav.Link>
                                    <Nav.Link href="/faq" >FAQ</Nav.Link>                                      
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </Styles> 
            </Container>
        </div>
    );
};

export default NavBar;