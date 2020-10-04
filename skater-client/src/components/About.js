import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Card } from "react-bootstrap"

const About = () => {
    return (
        <div className="About">
            <Container>
                <Card>
                <Card.Img src="https://picsum.photos/id/17/3000/700"/>
                    <Card.Body>
                        <Card.Title align="center"><h1>About</h1></Card.Title>
                        <Card.Text>
                            <blockquote>
                                Welcome to Skate Finder, here we implore you to give us a try to help you find your best inline stake. We know that getting into skating isn't easy because there are soo many options, even for an intermediate skater. This site caters to those who might have not bought a pair of skates in a while and need help choosing. There have been new styles that have moved the inline skating community such as the difference between freestyle and urban. Look into our FAQ page where we offer some insight on the differences. Feel free to leave a review under the review tab.                        
                            </blockquote>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      
    );
};

export default About;