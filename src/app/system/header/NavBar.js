import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Recurso1 from "../../../assets/img/logos/Recurso1.png";
import { startLogout } from "../../redux/actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
   

  const handleLogout = () => {
    dispatch(startLogout());
    navigate("/auth/login", { replace: true });
  };

  return (
    <>
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-14 w-auto"
                  src={Recurso1}
                  alt="Emu"
                />
                <img
                  className="hidden lg:block h-14 w-auto"
                  src={Recurso1}
                  alt="Emu"
                />
              </div>
            </div>
            <div className="hidden lg:block sm:block md:hidden sm:ml-6 lg:absolute lg:left-auto lg:ml-20 ">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                
                <Link
                  className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                  to="/admin/aproducts"
                >
                  Productos
                </Link>
                <Link
                  className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                  to="/admin/categories"
                >
                  Categorias
                </Link>
                <Link
                  className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                  to="/admin/orders"
                >
                  Pedidos
                </Link>
              </div>
            </div>            
            <button
              type="button"
              className="text-sm py-2.5 hover:shadow-lg button-navbar-out"
              onClick={handleLogout}
            >
              <span className="inline-block pr-3">Salir</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
       
      </nav>
    </>
  );
};
