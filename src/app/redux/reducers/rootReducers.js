import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartaReducer } from "./cartaReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({    
    carta: cartaReducer,
    auth: authReducer,
    ui: uiReducer

})