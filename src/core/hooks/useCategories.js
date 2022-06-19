import {useEffect, useState} from "react";
import api from "../network/ApiAxios";

export const useCategories = () => {

    const [isLoading, setIsLoading]= useState(true);

    const [categories, setCategories] = useState();


    const getCategories=async()=>{

        const resp = await api.get('/category/');

        console.log(resp.data)

        setCategories(resp.data)

        setIsLoading(false);
    }


    useEffect(() => {

        getCategories();

    }, [])

    return{
        categories,
        isLoading
    }

}