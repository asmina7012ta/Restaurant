import axios from "axios";
import { FAIL, SUCCESS } from "../constants/restconstants";

// Create an asynchronous function to create api call

export const RestaurantListAction = async (dispatch)=>{
  try{
    const {data}=await axios.get('/restaurants.json')
    console.log(data.restaurants)
    dispatch(
        {
            type:SUCCESS,
            payload:data.restaurants
        }
    )

  }
  catch(error){
    dispatch(
        {
            type:FAIL,
            payload:error
        }
    )
  }
}