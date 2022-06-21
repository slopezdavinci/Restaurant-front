import React from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";


export const PrivateRoute = ({children}) => {

    const { uIsAdmin } = useSelector((state) => state.auth);    

  return uIsAdmin === false ? <Navigate to="/" /> : children
};


