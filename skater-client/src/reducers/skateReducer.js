export const skateReducer = (state = [], action) => {
    switch(action.type){
        case "FETCH_SKATE":
            return action.payload
        default: 
            return state
    }
}
