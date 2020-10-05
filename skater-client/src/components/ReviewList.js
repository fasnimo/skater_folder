import React from 'react';
import { connect } from "react-redux"
import { fetchReview } from "../actions/reviewAction"

import "bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

class ReviewList extends React.Component{

    componentDidMount(){
        this.props.fetchReview()
    }
    
    render () {
        // let men = this.props.mentions.map(mention => <li key={mention.id}> Subject: {mention.subject} - Review: {mention.mention}</li>)
    let men = this.props.mentions.map(mention => (
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
}

const mapStateToProps = (state) => {
    return {
        mentions: state.mentions
    }
}

export default connect(mapStateToProps, { fetchReview })(ReviewList);