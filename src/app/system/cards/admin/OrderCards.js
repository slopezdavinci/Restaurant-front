import React from "react";
import { useDispatch } from "react-redux";
import testData from "../../../../core/data/testData";

export const OrderCards = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch();
  };

  const handleCancel = () => {
    dispatch();
  };

  return (
    <>
      {testData.orders.map((data) => {
        return (
          <div className="w-96 p-8 text-center bg-cards border-solid rounded-3xl shadow-2xl mx-auto mb-5">
            <h1 className="text-black font-semibold text-2xl">
              Pedido Nro {data.idPed}
            </h1>

            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <p className="font-semibold text-gray-400 text-left">
                <span className="pl-2">{data.Pedido}</span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle">
                  Mesa: {data.Mesa}
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle">
                  Usuario: {data.Usuario}
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="text-3xl font-semibold">
                  {data.PrecioTotal}
                </span>
              </p>

              <div className="text-center">
                <button
                  className="focus:outline-none text-white text-sm py-2.5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg mb-2 mt-5 mr-5 button-cards"
                  onClick={handleConfirm}
                >
                  Confirmar
                </button>
                <button
                  className="focus:outline-none text-white text-sm py-2.5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg button-cards"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
