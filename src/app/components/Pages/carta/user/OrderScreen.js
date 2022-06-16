import React, { useEffect } from "react";
import { NavBar } from "../../../../system/header/UserNavBar";
import { Footer } from "../../../../system/footer/UserFooter";
import useWindowDimensions from "../../../../../core/hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { OrderTable } from "../../../../system/tables/user/OrderTable";


export const UOrderScreen = () => {
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

