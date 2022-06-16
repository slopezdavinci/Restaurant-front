import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserLoginScreen } from "../app/components/Pages/auth/UserLoginScreen";
import { UserRegisterScreen } from "../app/components/Pages/auth/UserRegisterScreen";

export const AuthRouter = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Routes>
            <Route path={'/login'} element={<UserLoginScreen />} />
            <Route path={'/register'} element={<UserRegisterScreen />} />             
          </Routes>
        </div>
      </div>
    </>
  );
};
