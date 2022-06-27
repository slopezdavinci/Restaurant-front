import {useEffect, useState} from "react";
import api from "../network/ApiAxios";

export const usePurchases = () => {

    const [isLoading, setIsLoading]= useState(true);

    const [purchases, setPurchases] = useState();


    const getPurchases=async()=>{

        const resp = await api.get('/purchase/');

        setPurchases(resp.data)

        setIsLoading(false);
    }


    useEffect(() => {

        getPurchases();

    }, [])

    return{
        purchases,
        isLoading
    }

}