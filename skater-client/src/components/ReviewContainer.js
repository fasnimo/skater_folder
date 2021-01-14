import React from 'react';
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"
import { connect } from "react-redux"
import {fetchReview} from "../actions/reviewAction"
import {Route, Switch} from "react-router-dom"


class ReviewContainer extends React.Component{
    
    componentDidMount(){
        this.props.fetchReview()
    }
    
    render(){
         return (
            <div>
                <Switch>
                    <Route exact path="/reviews/new" component={ReviewForm} />
                    <Route exact path="/reviews" render={() => <ReviewList reviews={this.props.reviews}/>} />  
                </Switch>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps, {fetchReview})(ReviewContainer);