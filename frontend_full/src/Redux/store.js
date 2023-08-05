import {legacy_createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer as prodReducer} from "./productReducer/reducer";


 export const store = legacy_createStore(prodReducer, applyMiddleware(thunk));



