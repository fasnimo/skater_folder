export const addReview = (mention) => {
    return (dispatch) => {
        fetch("http://localhost:3000/reviews",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({subject: mention.subject, mention: mention.mention})
        })
        .then(res => res.json())
        .then(review => dispatch({type: "ADD_REVIEW", payload: review}))
    }
}