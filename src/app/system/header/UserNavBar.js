import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Recurso1 from "../../../assets/img/logos/Recurso1.png";
import { startLogout } from "../../redux/actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();

  const { uname } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

 
  return (
    <>
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/*
                                    Icon when menu is closed.
                                    Heroicon name: outline/menu
                                    Menu open: "hidden", Menu closed: "block"
                                */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
                                    Icon when menu is open.
                                    Heroicon name: outline/x
                                    Menu open: "block", Menu closed: "hidden"
                                */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
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
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link
                    className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                    to="/products"
                  >
                    Productos
                  </Link>
                  {uname && (
                    <Link
                      className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
                      to="/pedidos"
                    >
                      Mis pedidos
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {uname ? (
              <>
                <div>
                  <span className="text-accent mr-3">{uname}</span>
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
              </>
            ) : (
              <Link
                className="text-sm py-2.5 hover:shadow-lg button-navbar-out"
                to="/auth/login"
              >
                Iniciar Sesion
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

            <Link
              className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
              to="/main"
            >
              Home
            </Link>
            <Link
              className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
              to="/uproducts"
            >
              Productos
            </Link>
            <Link
              className="button-navbar px-3 py-2 rounded-md text-sm font-medium"
              to="/restaurants"
            >
              Restaurants
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
