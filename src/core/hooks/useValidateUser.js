import {useState} from "react";
import api from "../network/ApiAxios";

export const useValidateUser = () => {

    const [isLoading, setIsLoading]= useState(true);


    const checkUser=async(email, password)=>{

        const resp = await api.get(`/user/validateUser?email=${email}&password=${password}`);

        setIsLoading(false);

        return resp.data;
    }

    return{        
        isLoading,
        checkUser
    }

}