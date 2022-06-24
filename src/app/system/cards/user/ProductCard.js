import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useLoggedState } from "../../../../core/hooks/useLoggedState";
import { useProducts } from "../../../../core/hooks/useProducts";
import { AddingToCart } from "../../../redux/actions/events";

export const ProductCard = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useProducts();

  const { isLogged } = useLoggedState();
  
  const addToCart = (productId) => {

    const product= products.filter((p)=>p.id === productId);
console.log(isLogged)
    isLogged
      ? dispatch(AddingToCart(product))
      : Swal.fire({
          icon: "error",
          title: "Atencion!",
          text: "Para agregar al carrito primero debe iniciar sesion",
        });
  };

  return isLoading ? (
    <p>Cargando...</p>
  ) : (
    <div className="grid gap-16 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-12 ">
      {products.map((product) => {
        return (
          product.deprecated === false && (
            <div
              key={product.id}
              className="grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 transition-all duration-1000 ease-in"
            >
              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group bg-gray-200 hover:bg-orange-400 rounded-xl">
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={product.imageUrl}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-black capitalize group-hover:text-white">
                  {product.name}
                </h1>

                <p className="mt-2 text-gray-500 group-hover:text-gray-300">
                  {product.description.toLowerCase().charAt(0).toUpperCase() +
                    product.description.slice(1).toLowerCase()}
                </p>

                <p className="mt-2 text-gray-500 group-hover:text-gray-300">
                  ${product.price}
                </p>

                <div className="flex mt-3 -mx-2">
                  <button
                    className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:bg-orange-600 hover:shadow-lg mb-2 mt-3"
                    onClick={() => addToCart(product.id)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
