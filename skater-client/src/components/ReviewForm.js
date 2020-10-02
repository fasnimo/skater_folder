import React, { Component } from 'react';
import { connect } from "react-redux"
import { addReview } from "../actions/reviewAction"
 
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Form, Card } from "react-bootstrap"


class ReviewForm extends Component {
    state={
        subject: "",
        mention: ""
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
            mention: ""
        })
    }

    render() {
        // let men = this.props.mentions.map(ment => <li key={ment.id}> Subject: {ment.subject} - Review: {ment.mention}</li>)

        let men = this.props.mentions.map(ment =><Card className="mb-3" style={{color: "#000"}} key={ment.id}><Card.Body> <Card.Title>Subject: {ment.subject}</Card.Title> <Card.Text>Review: {ment.mention}</Card.Text></Card.Body></Card>)
        return (
            <div>  
                {/* <h2>Review Submission:</h2> */}
                <Form onSubmit={this.handleSubmit}>
                <Form.Group >
                    <Form.Label>Enter Review:</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.subject}
                        name="subject"
                        placeholder="Enter Subject"
                    /><br/>
                    <Form.Control 
                        type="text"
                        value={this.state.mention}
                        onChange={this.handleChange}
                        name="mention"
                        placeholder="Enter Review"
                    /><br/>
                    <Button type="submit" value="Create Review">Creat Review</Button>
                </Form.Group>
                </Form>

                <ul>
                    {men}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mentions: state.mentions
    }
}

export default connect(mapStateToProps, {addReview})(ReviewForm);