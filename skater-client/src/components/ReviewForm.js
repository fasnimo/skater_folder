import React, { Component } from 'react';
import { connect } from "react-redux"
import { addReview } from "../actions/reviewAction"

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
        let men = this.props.mentions.map(ment => <li key={ment.id}> Subject: {ment.subject} - Review: {ment.mention}</li>)
        return (
            <>  
                <h2>Review Submission:</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>Enter Review:</h3>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.subject}
                        name="subject"
                        placeholder="Enter Subject"
                    /><br/>
                    <input 
                        type="text"
                        value={this.state.mention}
                        onChange={this.handleChange}
                        name="mention"
                        placeholder="Enter Review"
                    /><br/>
                    <input type="submit" value="Create Review"/>
                </form>

                <ul>
                    {men}
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mentions: state.mentions
    }
}

export default connect(mapStateToProps, {addReview})(ReviewForm);