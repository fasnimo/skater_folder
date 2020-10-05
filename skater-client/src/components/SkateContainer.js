import React, { Component } from 'react';
import SkateSelector from './SkateSelector';
import SkateShow from "./SkateShow"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

class SkateContainer extends Component {

    render() {
        return (
            <div className="skates-container">
                <Container>
                    <Card>
                        <h3 align="center">Welcome to SkateFinder</h3>
                        <Card.Img src="https://picsum.photos/id/157/3000/800"/>
                        <Card.Body>
                            <div id="intro" align="center">
                                <p>Please feel free to leave a review by clicking the review tab.</p>
                                <p>Select your Skate Style to begin</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <SkateSelector/>
                    <SkateShow />
                </Container>
            </div>
        );
    }
}

export default SkateContainer;
