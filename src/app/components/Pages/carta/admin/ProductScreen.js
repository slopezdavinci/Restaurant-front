import React, {useEffect} from "react";
import {NavBar} from "../../../../system/header/NavBar";
import {Footer} from "../../../../system/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { setViewDesktop, setViewMobileTablet, uiOpenModal } from "../../../../redux/actions/ui";
import { ProductTable } from "../../../../system/tables/admin/ProductTable";
import { ProductModal } from "../../../../system/modal/ProductModal";


export const ProductScreen = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(uiOpenModal());
    };

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
            <div className="navbar">
                <NavBar/>
                <hr/>
            </div>
            <div
                className="mx-auto mb-5"
                style={viewDesktop ? {width: 1200} : {width: 380}}
            >
                <h1 className="mt-5 mb-5 h1 text-primarycolor">Productos</h1>
                <button
                    onClick={handleAdd}
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:shadow-lg"
                >
                    Agregar
                </button>
            </div>

            <div className="mx-auto mb-5" style={{width: 1200}}>
                <ProductTable />
            </div>

            <div className="mt-5 relative">
                <Footer/>
            </div>
            <ProductModal />
        </div>
    );
};
