import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
// import ClickComponent from './ClickComponent';

const Body = ({id, subject, mention}) => {
    return (
            <div key={id}>
                <Card className="mb-3, mr-5" style={{color: "#000"}}>
                    <Card.Body> 
                        <Card.Title>Subject: {subject}</Card.Title> 
                        <Card.Text>Review: {mention}</Card.Text>
                    </Card.Body>
                </Card> 
            </div>
    )
}
        
const ReviewList = ({reviews}) => {
        return(
            <div className="review-list">
            <Container>
                <Card>
                    <Card.Img src="https://picsum.photos/id/4/5000/700"/>
                    <h3 align="center">Review List</h3>
                    <ul>
                        {reviews.map(Body)}
                    </ul>
                </Card>
            </Container>
            {/* <ClickComponent /> */}
        </div>
        )
}

export default ReviewList;