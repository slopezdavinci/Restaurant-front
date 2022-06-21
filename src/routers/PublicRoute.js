import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({children}) => {

    const { uIsAdmin } = useSelector((state) => state.auth);    
        

  return  uIsAdmin === true ? <Navigate to="/admin/" /> : children;
};