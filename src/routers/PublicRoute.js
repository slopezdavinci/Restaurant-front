import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({children}) => {

    const { uid, uIsAdmin } = useSelector((state) => state.auth);    
        

  return uid && uIsAdmin === true ? <Navigate to="/admin/" /> : children;
};