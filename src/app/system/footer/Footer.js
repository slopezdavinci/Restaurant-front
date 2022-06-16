import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer bg-white pt-1">
        <hr />        
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-primarycolor font-bold">
                Desarrollado por Sebastian López - Leonardo Di Primo - Facundo De Buono 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
