import React from "react";
import { useDispatch } from "react-redux";
import { useProducts } from "../../../../core/hooks/useProducts";
import { usePurchases } from "../../../../core/hooks/usePurchases";
import {
  setActiveProduct,  
} from "../../../redux/actions/events";
import { uiOpenProductModal } from "../../../redux/actions/ui";

export const ProductTable = () => {
  const dispatch = useDispatch();

  const { products, isLoading } = useProducts();
   
  const handleModify = (product) => {
    dispatch(setActiveProduct(product));
    dispatch(uiOpenProductModal());
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
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th></th>                    
                  </tr>
                </tbody>
                {isLoading ? (
                  <tbody></tbody>
                ) : (
                  products.map((data) => {
                    return (
                      <tbody key={data.id}>                        
                        <tr className="bgTableBody divide-y divide-gray-200">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {data.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 space-between">
                              {data.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {data.category.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${data.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Stock: {data.stock}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <img
                              src={data.imageUrl}
                              width={200}
                              height={200}
                              alt="imagen del producto"
                            />
                          </td>                         
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button
                              className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:shadow-lg mr-2"
                              onClick={() => handleModify(data)}
                            >
                              Modificar
                            </button>                            
                          </td>
                        </tr>
                      </tbody>
                    ) 
                  })
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
