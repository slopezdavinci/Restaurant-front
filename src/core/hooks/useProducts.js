import {useEffect, useState} from "react";
import api from "../network/ApiAxios";

export const useProducts = () => {

    const [isLoading, setIsLoading]= useState(true);

    const [products, setProducts] = useState();


    const getProducts=async()=>{

        const resp = await api.get('/product/');

        setProducts(resp.data)

        setIsLoading(false);
    }


    useEffect(() => {

        getProducts();

    }, [])

    return{
        products,
        isLoading
    }

}