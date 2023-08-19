import * as types from "./actionType";

const initalState={
    isLoading:false,
    isAuth:false,
    token:"" 
}

export const reducer = (state=initalState, action) =>{
     const {type,payload} = action 

     switch(type){
        case types.LOGIN_REQ:{
            return{
                ...state,
                isLoading:true 
            }
        }
        case types.LOGIN_SUCC:{
            return{
                ...state,
                isLoading:false, 
                isAuth:true,
                token:payload 
            }
        }
        default :{
            return state 
        }
     }
}