import * as types from "./actionType";
import axios from "axios";


export const loginFun = (details) => async(dispatch)=>{
   dispatch({type:types.LOGIN_REQ})
    try {
        let res = await axios.post(`https://reqres.in/api/login`,details );
        let data= res.data 
        let token = data.token 
        console.log(token);
        dispatch({type:types.LOGIN_SUCC, payload:token})
    } catch (error) {
        console.log(error);
    }
}