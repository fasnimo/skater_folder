import React from 'react';
import { connect } from "react-redux"
import { fetchReview } from "../actions/fetchReview"

import "bootstrap/dist/css/bootstrap.min.css"
import { Card } from "react-bootstrap"

class ReviewList extends React.Component{

    componentDidMount(){
        this.props.fetchReview()
    }
    
    render () {
        // let men = this.props.mentions.map(mention => <li key={mention.id}> Subject: {mention.subject} - Review: {mention.mention}</li>)
        let men = this.props.mentions.map(mention => <Card className="mb-3" style={{color: "#000"}} key={mention.id}><Card.Body key={mention.id}> <Card.Title>Subject: {mention.subject}</Card.Title> <Card.Text>Review: {mention.mention}</Card.Text></Card.Body></Card>)
        return(
            <div className="review-list">
            <h3>Review List:</h3>
            <ul>
                {men}
            </ul>
        </div>
        )
    }
}

// export default ReviewList
// const Rev = ({  id, mention }) => {
//     return (
//         <div className="reviews" key={id}>
//             <blockquote>
//                 {mention}
//             </blockquote>
//         </div>
//     )
// }

// const ReviewList = ({mentions}) => {
//     return (
//         <div className="review-list">
//             <h4>Review List:</h4>
//             {mentions.map(Rev)}
//         </div>
//     );
// };

const mapStateToProps = (state) => {
    return {
        mentions: state.mentions
    }
}

export default connect(mapStateToProps, { fetchReview })(ReviewList);