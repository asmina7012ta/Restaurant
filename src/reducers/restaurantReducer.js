import { FAIL, SUCCESS } from "../constants/restconstants";

// Reducer Function
//                              STATE TO STORE THE PAYLOAD,WORKING ACTION
export const restaurantListReducer=(state={restList:[] },action)=>{
    switch(action.type){
        case SUCCESS:
            return {restList:action.payload}
        case FAIL:
            return {restList:action.error}
        default:
            return state
    }
}