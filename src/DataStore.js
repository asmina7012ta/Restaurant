import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

//create reducer
const reducer=combineReducers({
    
    restaurantReducer:restaurantListReducer
})
//create middleware
const middleware=[thunk]
// create store
//...spread operator
 const store=createStore(reducer,applyMiddleware(...middleware))

 export default store