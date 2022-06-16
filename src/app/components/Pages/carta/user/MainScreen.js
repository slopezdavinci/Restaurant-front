import React from "react";
import { NavBar } from "../../../../system/header/UserNavBar";
import { Footer } from "../../../../system/footer/UserFooter";
import { NewsCards } from "../../../../system/cards/admin/NewsCards";

export const MainScreen = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
        <hr />
      </div>

      <div>
        <h1 className="mt-5 mb-5 ml-5 h1 text-primarycolor">Home</h1>
      </div>

      <div className="mx-auto">
        <h3 className="mt-5 mb-5 ml-5 h1 text-primarycolor text-center">
          Seccion de noticias
        </h3>
      </div>

      <div>
        <NewsCards />
      </div>

      <div className="mt-5 relative">
        <Footer />
      </div>
    </>
  );
};
