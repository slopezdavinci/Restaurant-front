import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer bg-white pt-1">
      <hr />
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col mx-auto">
              <span className="font-bold text-primarycolor uppercase mb-2">
                Servicios
              </span>
              <span className="my-2">
              <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Publicidad
                </Link>                
              </span>
              <span className="my-2">
                <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Menus
                </Link>
              </span>
              <span className="my-2">
                <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Reservas
                </Link>
              </span>
            </div>
            <div className="flex flex-col mx-auto">
            <span className="font-bold text-primarycolor uppercase mb-2">
                Sobre nosotros
              </span>
              <span className="my-2">
                <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Compañia
                </Link>
              </span>
              <span className="my-2">
                <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Equipo
                </Link>
              </span>
              <span className="my-2">
                <Link
                  className="text-primarycolor text-md"
                  to="/underdevelopment"
                >
                  Legal
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-primarycolor font-bold">
              Desarrollado por Sebastian López - Leonardo Di Primo - Facundo De
              Buono
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
