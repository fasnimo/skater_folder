import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Card, Row, Col } from "react-bootstrap"

const FrequentAsk = () => {
    return (
        <div className="faq">
            
            <Container>
                <Card>
                    <Card.Img src="https://picsum.photos/id/9/3000/700"/>
                        <Card.Body>
                        <Card.Title align="center"><h1>FAQ</h1></Card.Title>
                        <Card.Text>
                            <blockquote>
                                Will include Qestions? and Answers!
                            </blockquote>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
           
        </div>
    );
};

export default FrequentAsk;