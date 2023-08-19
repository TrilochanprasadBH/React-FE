import * as types from "../productReducer/actionType";

const initalState = {
isLoading:false,
isError:false,
products:[]
}

export const reducer = ( state= initalState, action)=>{
    const {type,payload}= action 

    switch(type){
        case types.GET_PRODUCT_REQ:{
            return{
                ...state,
                isLoading:true 
            }
        }
        case types.GET_PRODUCT_SUC:{
            return {
                ...state,
                isLoading:false,
                products:payload
            }
        }
       case types.GET_PRODUCT_FAI:{
        return{
            ...state,
            isLoading:false,
            isError:true 
        }
       }
       case types.POST_PRODUCT_REQ:{
        return {
            ...state,
            isLoading:true 
        }
       }
     case types.POST_PRODUCT_SUC:{
        return{
            ...state,
            isLoading:false 
        }
     }
     case types.POST_PRODUCT_FAI:{
        return{
            ...state,
            isLoading:false,
            isError:true 
        }
     }
        default :{
            return state 
        }
    }
   
}

// export default reducer