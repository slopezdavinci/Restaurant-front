import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { OrderScreen } from "../app/components/Pages/carta/admin/OrderScreen";
import { ProductScreen } from "../app/components/Pages/carta/admin/ProductScreen";
import { MainScreen } from "../app/components/Pages/carta/user/MainScreen";
import { UProductScreen } from "../app/components/Pages/carta/user/UProductScreen";

import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { UnderDevelopment } from "../app/components/Pages/error/UnderDevelopmentScreen";
import { useDispatch } from "react-redux";
import { reloadUser } from "../app/redux/actions/auth";


export const AppRouter = () => {

const dispatch=useDispatch();

if(localStorage.getItem('token')){
  dispatch(reloadUser(localStorage.getItem('token')));
}


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute>
              <Routes>
                <Route index element={<MainScreen />} />
                <Route path="/products" element={<UProductScreen />} />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="/underdevelopment" element={<UnderDevelopment />} />
                <Route path="/*" element={<MainScreen />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route index element={<ProductScreen />} />
                <Route path="/orders" element={<OrderScreen />} />
                <Route path="/aproducts" element={<ProductScreen />} />
                <Route path="/*" element={<ProductScreen />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
