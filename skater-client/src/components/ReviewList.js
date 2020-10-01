import React from 'react';
import { connect } from "react-redux"
import { fetchReview } from "../actions/fetchReview"

class ReviewList extends React.Component{

    componentDidMount(){
        this.props.fetchReview()
    }
    
    render () {
    let men = this.props.mentions.map(mention => <li key={mention.id}> Subject: {mention.subject} - Review: {mention.mention}</li>)
        return(
            <div className="review-list">
            <h2>Review List:</h2>
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