import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

const About = () => {
    return (
        <div className="About">
            <Container>
                <Card>
                <Card.Img src="https://picsum.photos/id/17/4000/900"/>
                    <Card.Body>
                        <Card.Title align="center"><h1>About</h1></Card.Title>
                        <Card.Text >
                            Welcome to Skate Finder, here we assist you in finding your best inline stake. We know that getting into skating isn't easy because inline skating is a multi-disciplinary sport, even for an intermediate skater. This site caters to those who might have not bought a pair of skates in a while and need help choosing. There have been new styles that have moved into the inline skating community such as "freestyle" and "urban". Look into our FAQ page where we offer some insight on the differences. Feel free to leave a review under the review tab.                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
      
    );
};

export default About;