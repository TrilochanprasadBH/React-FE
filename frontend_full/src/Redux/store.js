import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as prodReducer} from "./productReducer/reducer";
import {reducer as authReducer} from "./authReducer/reducer";


const rootReducer = combineReducers({
    prod: prodReducer,
    auth : authReducer
})

 export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));



