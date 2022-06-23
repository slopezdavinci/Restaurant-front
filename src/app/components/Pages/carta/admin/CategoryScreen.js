import React, {useEffect} from "react";
import {NavBar} from "../../../../system/header/NavBar";
import {Footer} from "../../../../system/footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { setViewDesktop, setViewMobileTablet, uiOpenCategoryModal } from "../../../../redux/actions/ui";
import { CategoryTable } from "../../../../system/tables/admin/CategoryTable";
import { CategoryModal } from "../../../../system/modal/CategoryModal";


export const CategoryScreen = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(uiOpenCategoryModal());
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
            <div className="navbar bg-orange-500">
                <NavBar/>
                <hr/>
            </div>
            <div
                className="mx-auto mb-5"
                style={viewDesktop ? {width: 1200} : {width: 380}}
            >
                <h1 className="mt-5 mb-5 h1 text-primarycolor">Categorias</h1>
                <button
                    onClick={handleAdd}
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:shadow-lg"
                >
                    Agregar
                </button>
            </div>

            <div className="mx-auto mb-5" style={{width: 1200}}>
                <CategoryTable />
            </div>

            <div className="mt-5 relative">
                <Footer/>
            </div>
            <CategoryModal />
        </div>
    );
};
