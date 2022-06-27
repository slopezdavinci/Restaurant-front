import React, {useEffect} from "react";
import {NavBar} from "../../../../system/header/UserNavBar";
import {Footer} from "../../../../system/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { setViewDesktop, setViewMobileTablet } from "../../../../redux/actions/ui";
import { CartTable } from "../../../../system/tables/user/CartTable";
import { PurchaseTable } from "../../../../system/tables/user/PurchaseTable";

export const PurchaseScreen = () => {
    const dispatch = useDispatch();    

    const {width} = useWindowDimensions();

    const {viewDesktop} = useSelector((state) => state.ui);

    useEffect(() => {
        if (width < 1024) {
            dispatch(setViewMobileTablet());
        } else {
            dispatch(setViewDesktop());
        }
    }, [width, setViewDesktop, setViewMobileTablet]);

    return (
        <div>
            <div className="navbar bg-orange-500">
                <NavBar/>
                <hr/>
            </div>
            <div
                className="mx-auto mb-5"
                style={viewDesktop ? {width: 1200} : {width: 380}}
            >
                <h1 className="mt-5 mb-5 h1 text-primarycolor">Mis pedidos</h1>
                
            </div>

            <div className="mx-auto mb-5" style={{width: 1200}}>
                <PurchaseTable />
            </div>

            <div className="mt-5 relative">
                <Footer/>
            </div>            
        </div>
    );
};
