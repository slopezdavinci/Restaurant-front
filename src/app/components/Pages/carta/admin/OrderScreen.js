import React from "react";
import { NavBar } from "../../../../system/header/NavBar";
import { Footer } from "../../../../system/footer/Footer";
import { OrderTable } from "../../../../system/tables/admin/OrderTable";
import { OrderModal } from "../../../../system/modal/OrderModal";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { setViewDesktop, setViewMobileTablet } from "../../../../redux/actions/ui";
import { OrderCards } from "../../../../system/cards/admin/OrderCards";
import { useEffect } from "react";

export const OrderScreen = () => {
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const { viewDesktop } = useSelector((state) => state.ui);

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
        <NavBar />
        <hr />
      </div>

      <div
        className="mx-auto"
        style={viewDesktop ? { width: 1200 } : { width: 380 }}
      >
        <h1 className="mt-5 mb-5 h1 text-primarycolor">Pedidos</h1>
      </div>

      <div className="ml-5 mx-auto w-full">
        {viewDesktop ? (
          <div className="mx-auto" style={{ width: 1200 }}>
            <OrderTable />
          </div>
        ) : (
          <OrderCards />
        )}
      </div>
      <OrderModal />
      <div className="mt-5 relative">
        <Footer />
      </div>
    </div>
  );
};
