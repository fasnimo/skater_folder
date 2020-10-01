export const reviewReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_REVIEW":
            return [...state, action.payload]
        case "FETCH_REVIEW":
            return action.payload
        default: 
            return state
    }
}

