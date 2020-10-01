export const fetchReview = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(review => dispatch({type: "FETCH_REVIEW", payload: review}))
    } 
}