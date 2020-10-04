import React, { Component } from 'react';
import SkateSelector from './SkateSelector';
import SkateShow from "./SkateShow"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Card } from "react-bootstrap"

class SkateContainer extends Component {

    render() {
        return (
            <div className="skates-container">
                <Container>
                    <Card>
                        <Card.Img src="https://picsum.photos/id/99/4000/800"/>
                        <Card.Body>
                            <Card.Text align="center">
                                <h3>Welcome to SkateFinder</h3>
                                <p>Please feel free to leave a review by clicking the review tab</p>
                                <p>Select your Skate Style to begin</p>
                            </Card.Text>
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
