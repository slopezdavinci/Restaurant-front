import React from "react";
import { useDispatch } from "react-redux";

export const NewsCards = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch();
  };

  const handleCancel = () => {
    dispatch();
  };

  return (
    <>
      <div
        className="p-8 text-center bg-cards border-solid rounded-3xl pr-16 shadow-2xl mx-auto mb-3"
        style={{ width: 1200 }}
      >
        <h1 className="text-black font-semibold text-2xl">
          Titulo de noticia{" "}
        </h1>

        <hr className="mt-4 border-1" />
        <div className="pt-8">
          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="material-icons align-middle mx-auto">
              Cuerpo de la noticia
            </span>
          </p>

          <p className="font-semibold text-gray-400 text-left pt-5">
            <span className="text-3xl font-semibold"></span>
          </p>

          <button className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg mb-2 mt-3">
            Ver mas
          </button>
        </div>
      </div>
      );
    </>
  );
};
