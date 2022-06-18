import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";


export const PrivateRoute = ({children}) => {

    const { uid, uIsAdmin } = useSelector((state) => state.auth);    

  return uid && uIsAdmin === true ? children : <Navigate to="/" />
};


