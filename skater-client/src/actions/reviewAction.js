export const fetchReview = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(review => dispatch({type: "FETCH_REVIEW", payload: review}))
    } 
}

export const addReview = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({subject: data.subject, mention: data.review})
        })
        .then(res => res.json())
        .then(review => dispatch({type: "ADD_REVIEW", payload: review}))
        window.location.href = "http://localhost:3001/reviews"
    }
}