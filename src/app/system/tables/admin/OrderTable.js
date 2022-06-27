import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { usePurchases } from "../../../../core/hooks/usePurchases";
import { setActiveOrder } from "../../../redux/actions/events";
import { uiOpenOrderModal } from "../../../redux/actions/ui";

export const OrderTable = () => {
  const [filtroPedidos, setFiltroPedidos] = useState("Todos");

  const { purchases, isLoading } = usePurchases();

  const dispatch = useDispatch();

  const handleDetail = (order) => {
    dispatch(setActiveOrder(order))
    dispatch(uiOpenOrderModal());
  };

  return (
    <>
      <div className="flex flex-col">
        <div
          className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
          style={{ overflow: "hidden" }}
        >
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="mb-3 text-center">
                <ul>
                  <li className="inline font-semibold mr-3 text-primarycolor">
                    <button
                      onClick={() => {
                        setFiltroPedidos("Todos");
                      }}
                    >
                      Todos
                    </button>
                  </li>
                  <li className="inline font-semibold mr-3 text-primarycolor">
                    <button
                      onClick={() => {
                        setFiltroPedidos("COMPLETED");
                      }}
                    >
                      Completados
                    </button>
                  </li>
                  <li className="inline font-semibold mr-3 text-primarycolor">
                    <button
                      onClick={() => {
                        setFiltroPedidos("PENDING");
                      }}
                    >
                      Pendientes
                    </button>
                  </li>
                  <li className="inline font-semibold text-primarycolor">
                    <button
                      onClick={() => {
                        setFiltroPedidos("IN_TRANSIT");
                      }}
                    >
                      En curso
                    </button>
                  </li>
                </ul>
              </div>

              {filtroPedidos === "Todos" ? (
                isLoading ? (
                  <p>Cargando...</p>
                ) : (
                  purchases.map((data, i) => {
                    return (
                      <div
                        className="bgTableBody shadow mb-5"
                        style={{ borderRadius: 20 }}
                        key={i}
                      >
                        <table className="min-w-full flex flex-col">
                          <thead className="w-full flex flex-row justify-around mt-1 mb-1">
                            <tr className="flex row space-x-48">
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="text-right font-bold text-md flex flex-col justify-end">
                                ORDER #{data.id}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <hr />
                              </td>
                            </tr>
                          </thead>

                          <tbody className="w-full flex flex-row justify-around">
                            <tr
                              key={data.id}
                              className="flex flex-row space-x-20"
                            >
                              <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                                <div className="flex-col items-center">
                                  <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                    ID Cliente
                                  </p>
                                  <p className="w-10 h-10  text-xl flex items-center justify-content-center font-semibold rounded-full bgTableMesa text-primarycolor">
                                    {data.userId}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center">
                                  <button
                                    className="focus:outline-none text-primarycolor text-sm py-2.5 px-2 rounded-md hover:shadow-lg block"
                                    onClick={() => handleDetail(data)}
                                  >
                                    <span className="content-center text-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 inline mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                      </svg>
                                    </span>
                                    <span className="flex items-center justify-content-center">
                                      Ver pedido
                                    </span>
                                  </button>
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-col justify-center items-center">
                                <p className="font-bold content-center text-center">
                                  Total
                                </p>
                                <p className="font-bold text-xl content-center text-center">
                                  {`$${data.price}`}
                                </p>
                              </td>
                              <td className="text-center text-sm text-gray-500 flex flex-col justify-center items-center">
                                <div className="flex-row">
                                  {data.state === "PENDING"
                                    ? "PENDIENTE"
                                    : data.state === "IN_TRANSIT"
                                    ? "EN PREPARACION"
                                    : data.state === "COMPLETED" &&
                                      "TERMINADO Y ENVIADO"}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })
                )
              ) : (
                purchases
                  .filter((data) => data.state === filtroPedidos)
                  .map((data, i) => {
                    return (
                      <div
                        className="bgTableBody shadow mb-5"
                        style={{ borderRadius: 20 }}
                        key={i}
                      >
                        <table className="min-w-full flex flex-col">
                          <thead className="w-full flex flex-row justify-around mt-1 mb-1">
                            <tr className="flex row space-x-48">
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="flex flex-col"></td>
                              <td className="text-right font-bold text-md flex flex-col justify-end">
                                ORDER #{data.id}
                              </td>
                            </tr>
                            
                          </thead>
                          <tbody className="w-full flex flex-row justify-around">
                          <tr className="flex row">
                              <td className="flex flex-col">                                
                                <hr style={{width:"65rem"}} />
                              </td>
                            </tr>
                          </tbody>

                          <tbody className="w-full flex flex-row justify-around">
                            <tr
                              key={data.id}
                              className="flex flex-row space-x-20"
                            >
                              <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                                <div className="flex-col items-center">
                                  <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                    ID Cliente
                                  </p>
                                  <p className="w-10 h-10  text-xl flex items-center justify-content-center font-semibold rounded-full bgTableMesa text-primarycolor">
                                    {data.userId}
                                  </p>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                                <div className="flex flex-col items-center">
                                  <button
                                    className="focus:outline-none text-primarycolor text-sm py-2.5 px-2 rounded-md hover:shadow-lg block"
                                    onClick={() => handleDetail(data)}
                                  >
                                    <span className="content-center text-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 inline mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                      </svg>
                                    </span>
                                    <span className="flex items-center justify-content-center">
                                      Ver pedido
                                    </span>
                                  </button>
                                </div>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-col justify-center items-center">
                                <p className="font-bold content-center text-center">
                                  Total
                                </p>
                                <p className="font-bold text-xl content-center text-center">
                                  {`$${data.price}`}
                                </p>
                              </td>
                              <td className="text-center text-sm text-gray-500 flex flex-col justify-center items-center">
                                <div className="flex-row">
                                  {data.state === "PENDING"
                                    ? "PENDIENTE"
                                    : data.state === "IN_TRANSIT"
                                    ? "EN PREPARACION"
                                    : data.state === "COMPLETED" &&
                                      "TERMINADO Y ENVIADO"}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
