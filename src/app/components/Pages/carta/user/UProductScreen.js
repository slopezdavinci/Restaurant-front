import React from "react";
import { NavBar } from "../../../../system/header/UserNavBar";
import { Footer } from "../../../../system/footer/UserFooter";

import {ProductCard} from "../../../../system/cards/user/ProductCard";

export const UProductScreen = () => {

  return (
    <>
      <div className="navbar bg-orange-500">
        <NavBar />        
      </div>

      <div>
        <h1 className="mt-5 mb-5 ml-5 text-5xl underline decoration-dotted underline-offset-8 decoration-violet-500/50 text-primarycolor">Productos</h1>

        <ProductCard />
      </div>

      <div className="mt-5 relative">
        <Footer />
      </div>
    </>
  );
};
