import * as types from "./actionType";
import axios from "axios";

export const addProd=(newProd)=>async(dispatch)=>{
    dispatch({type:types.GET_PRODUCT_REQ})
    try {
        let res= await axios.post(`http://localhost:8080/products`,newProd)
        let data= res.data 
        dispatch({type:types.GET_PRODUCT_SUC, payload:data})
        console.log(data);
    } catch (error) {
        console.log(error);
        dispatch({type:types.GET_PRODUCT_FAI})
    }
}
