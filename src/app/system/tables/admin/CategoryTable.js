import React from "react";
import { useDispatch } from "react-redux";
import { useCategories } from "../../../../core/hooks/useCategories";
import {
  setActiveCategory,    
} from "../../../redux/actions/events";
import { uiOpenCategoryModal } from "../../../redux/actions/ui";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories, isLoading } = useCategories();

  const handleModify = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(uiOpenCategoryModal());
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
                {isLoading ? (
                  <tbody></tbody>
                ) : (
                  categories.map((data) => {
                    return data.deprecated === false ?
                     (
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
                    : (<tbody key={data.id} style={{display:"none"}}></tbody>)
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
