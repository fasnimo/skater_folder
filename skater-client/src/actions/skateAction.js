export const fetchSkates = (level) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/${level}`)
        .then(res => res.json())
        .then(skates => dispatch({type: "FETCH_SKATE", payload: skates}))
    }
}