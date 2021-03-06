import React, {useEffect} from "react";
import {NavBar} from "../../../../system/header/NavBar";
import {Footer} from "../../../../system/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { setViewDesktop, setViewMobileTablet } from "../../../../redux/actions/ui";
import { OrderTable } from "../../../../system/tables/admin/OrderTable";
import { OrderModal } from "../../../../system/modal/OrderModal";

export const OrderScreen = () => {
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
                <h1 className="mt-5 mb-5 h1 text-primarycolor">Pedidos</h1>
                
            </div>

            <div className="mx-auto mb-5" style={{width: 1200}}>
                <OrderTable />
            </div>

            <div className="mt-5 relative">
                <Footer/>
            </div>            
            <OrderModal />
        </div>
    );
};
