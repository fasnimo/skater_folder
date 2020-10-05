import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

const ReviewList = ({reviews}) => {

    let men = reviews.map(mention => (
            <Card className="mb-3, mr-5" style={{color: "#000"}} key={mention.id}>
                <Card.Body key={mention.id}> 
                <Card.Title>Subject: {mention.subject}</Card.Title> 
                <Card.Text>Review: {mention.mention}</Card.Text>
                </Card.Body>
            </Card> 
        ))
    
        return(
            <div className="review-list">
            <Container>
                <Card>
                    <Card.Img src="https://picsum.photos/id/4/5000/700"/>
                    <h3 align="center">Review List</h3>
                    <ul>
                        {men}
                    </ul>
                </Card>
            </Container>
        </div>
        )
}

export default ReviewList;