import React, { Component } from 'react';
import { connect } from "react-redux"
import { addReview } from "../actions/reviewAction"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Container} from "react-bootstrap"


class ReviewForm extends Component {
    state={
        subject: "",
        review: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        this.props.addReview(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            subject: "",
            review: ""
        })
    }

    render() {
        // let men = this.props.reviews.map(ment => <li key={ment.id}> Subject: {ment.subject} - Review: {ment.review}</li>)
        // let men = this.props.reviews.map(ment =><Card className="mb-3" style={{color: "#000"}} key={ment.id}><Card.Body> <Card.Title>Subject: {ment.subject}</Card.Title> <Card.Text>Review: {ment.review}</Card.Text></Card.Body></Card>)
        return (
            <div>  
                <Container>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label><h4>Enter Review:</h4></Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.subject}
                        name="subject"
                        placeholder="Enter Subject"
                    /><br/>
                    <Form.Control 
                        as="textarea"
                        rows="3"
                        value={this.state.review}
                        onChange={this.handleChange}
                        name="review"
                        placeholder="Enter Review"
                    /><br/>
                    <Button type="submit" value="Create Review">Submit Review</Button>
                </Form.Group>
                </Form>
                </Container>
            </div>
        );
    }
}

export default connect(null, {addReview})(ReviewForm);