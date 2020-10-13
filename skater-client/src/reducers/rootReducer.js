import { combineReducers } from "redux"
import { skateReducer } from "./skateReducer"
import { reviewReducer } from "./reviewReducer"

export const rootReducer = combineReducers({
    skates: skateReducer,
    reviews: reviewReducer
})
