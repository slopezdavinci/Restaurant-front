import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCategories } from "../../../../core/hooks/useCategories";
import { RemovingFromCart } from "../../../redux/actions/events";

export const CartTable = () => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((state) => state.carta);

  const handleDeleteFromCart = (product) => {
    dispatch(RemovingFromCart(product));    
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
          style={{ overflow: "hidden" }}
        >
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                {
                  cartProducts.map((data, i) => {
                    return (
                    <tbody key={i}>
                      <tr className="bgTableBody divide-y divide-gray-200">                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 space-between">
                            {data.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:shadow-lg mr-2"
                            onClick={() => handleDeleteFromCart(data)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    </tbody>);
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
