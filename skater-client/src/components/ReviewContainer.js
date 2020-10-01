import React from 'react';
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"
import { connect } from "react-redux"
import fetchReviews from "../actions/fetchReviews"

class ReviewContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchReviews()
    }
    
    render(){
         return (
            <div>
                <ReviewForm />
                <ReviewList />
            </div>
        );
    }
};

export default connect(null, {fetchReviews})(ReviewContainer);