import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useProducts } from "../../../../core/hooks/useProducts";



export const ProductTable = () => {
  const dispatch = useDispatch();


  const { cid } = useSelector((state) => state.auth);

  const {products, isLoading}=useProducts()

  const handleDelete = () => {
    //dispatch();
  };

  const handleModify = (e) => {    
    //dispatch(uiOpenModal());
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
                {(isLoading)
                ?
                (<tbody></tbody>)
                :
              (products.map((data) => {
                  return (
                    <div>
                      <tr>
                        <p>Estado</p>
                      </tr>
                      <tr className="bgTableBody divide-y divide-gray-200">
                        <td
                          key={data.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
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
                            {data.description}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {data.imageUrl}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg mr-2"
                            onClick={handleModify}
                          >
                            Modificar
                          </button>
                          <button
                            className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg"
                            onClick={handleDelete}
                          >
                            Borrar
                          </button>
                        </td>
                      </tr>
                    </div>
                  );
                }) )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};