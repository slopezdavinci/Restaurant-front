import React from "react";
import { useSelector } from "react-redux";
import { usePurchases } from "../../../../core/hooks/usePurchases";


export const PurchaseTable = () => {
    
  const { uid } = useSelector((state) => state.auth);

  const { purchases, isLoading } = usePurchases();

  
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
                  purchases.map((data, i) => {
                    return data.userId === uid ? (
                      <tbody key={i}>
                        <tr className="bgTableBody divide-y divide-gray-200">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 space-between">
                              {data.id}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 space-between">
                              {data.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${data.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {data.dateOfPurchase}
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm text-white text-center ${
                              data.state === "PENDING"
                                ? "bg-yellow-500"
                                : data.state === "INPROGRESS"
                                ? "bg-orange-500"
                                : data.state === "COMPLETED" && "bg-green-500"
                            } `}
                          >
                            {data.state === "PENDING"
                              ? "PENDIENTE"
                              : data.state === "INPROGRESS"
                              ? "EN PREPARACION"
                              : data.state === "COMPLETED" &&
                                "TERMINADO Y ENVIADO"}
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody></tbody>
                    );
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
