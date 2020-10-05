import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Card, Button, Row, Col } from "react-bootstrap"

const FrequentAsk = () => {
    const  [showResaults, setShowResaults] = React.useState(false)
    const onClick = () => setShowResaults(true)
    return (
        <div className="faq">
            
            <Container>
                <Card>
                    <Card.Img src="https://picsum.photos/id/9/3000/700"/>
                        <Card.Body>
                        <Card.Title align="center"><h1>FAQ</h1></Card.Title>
                            <blockquote align="center">
                                Here are some of the most frequent asked questions when it comes to chosine the best inline skate.
                            </blockquote>
                            <Button onClick={onClick} align="center" className="mb-3">Show FAQ</Button>
                            { showResaults ? <Resaults/> : null}
                    </Card.Body>
                </Card>
            </Container>
           
        </div>
    );
};

const Resaults = () => {
    return(
        <div id="answer" className="mb-3">
            <Row>
                <Col>
                    <h4>What does Urban mean?</h4>
                    <p>Urban is a form of commuting through your town and enjoying layout. Skater will use the city terrain as a chance to exercise their skating skills. These skates come with sturdier boot construction and a variety of wheel sizes built about maneuverability. They also house a liner that can be replaced and exterior scratch pads that can be replaced.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>What does Recreational mean?</h4>
                    <p>Recreational skating is for the casual skater who likes to skate for exercise down beach trails, and bike trails. This is the starting point because of the low price point for those who just trying out skates for the first time or those who are turning. These skates usually come with a soft boot and are less built for harsh use nor speed.</p>                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>What does Speed mean?</h4>
                    <p>Speed skating has a bit of a forked road because there are skates built for long distances like Cross Track, marathon, and races. The skates are distinguishable because of their longer frames and usually do not come with a liner as Urban skates do. They are also the most expensive and most come made out of carbon fiber to give you the most connected to your wheels.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>What does Aggressive mean?</h4>
                    <p>Aggressive skating is as the name implies. The skates come with skid plates and many replaceable parts like the urban skate. The difference is that the skats have much smaller wheel sizes from 56mm - 80mm the wheels are so small because the closer you are to the ground there is a lower center of gravity enabling you to have more control. The other difference from Urban style skates is that the top part of the boot has more give for flexibility.</p>                
                </Col>
            </Row>
        </div>
    )
}

export default FrequentAsk;