import React, { useEffect } from "react";
import { NavBar } from "../../../system/header/UserNavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setViewDesktop,
  setViewMobileTablet,
  uiOpenModal,
} from "../../../redux/actions/ui";
import useWindowDimensions from "../../../../core/hooks/useWindowDimensions";

export const UnderDevelopment = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(uiOpenModal());
  };

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
        className="mx-auto mb-5"
        style={viewDesktop ? { width: 1200 } : { width: 380 }}
      >
        <h1 className="mt-5 mb-5 h1 text-primarycolor">Aun en desarrollo</h1>
        
      </div>

    </div>
  );
};
