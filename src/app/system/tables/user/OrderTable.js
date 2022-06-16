import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../../redux/actions/ui";

export const OrderTable = () => {

  let PrecioTotal = 0;

  const [filtroPedidos, setFiltroPedidos] = useState("Todos");

  const orders = useSelector(state => state.carta.orders);

  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch();
  };

  const handleDetail = (OrderId) => {
    dispatch(uiOpenModal(OrderId));
  };

  const handleCancel = () => {
    dispatch();
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

                  <li className="inline font-semibold mr-3 text-primarycolor" ><button onClick={() => { setFiltroPedidos('Todos') }}>Todos</button></li>
                  <li className="inline font-semibold mr-3 text-primarycolor" ><button onClick={() => { setFiltroPedidos('Completado') }}>Completados</button></li>
                  <li className="inline font-semibold mr-3 text-primarycolor" ><button onClick={() => { setFiltroPedidos('Pendiente') }}>Pendientes</button></li>
                  <li className="inline font-semibold text-primarycolor"><button onClick={() => { setFiltroPedidos('En curso') }}>En curso</button></li>

                </ul>
              </div>

              {(filtroPedidos === "Todos")
                ?
                (orders.map((data) => {

                  PrecioTotal = 0

                  orders[data.order_id].products.forEach(product => {

                    PrecioTotal = PrecioTotal + product.price;
                    console.log(PrecioTotal);
                    return PrecioTotal;

                  }
                  )


                  return (
                    <div className="bgTableBody shadow mb-5" style={{ borderRadius: 20 }}>
                      <table className="min-w-full flex flex-col">
                        <thead className="w-full flex flex-row justify-around mt-1 mb-1">
                          <tr className="flex row space-x-48">
                            {data.order_state === "Completado" ? (
                              <td className="font-bold textGreen flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            ) : data.order_state === "En curso" ? (
                              <td className="font-bold textOrange flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            ) : (
                              <td className="font-bold textRed flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            )}
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="text-right font-bold text-md flex flex-col justify-end">
                              ORDER #{data.order_id}
                            </td>
                          </tr>
                        </thead>
                        <hr />
                        <tbody
                          className="w-full flex flex-row justify-around"
                        >

                          <tr key={data.order_id} className="flex flex-row space-x-20">
                            <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                              <div className="flex-col items-center">
                                <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                  Mesa
                              </p>
                                <p className="w-10 h-10  text-xl flex items-center justify-content-center font-semibold rounded-full bgTableMesa text-primarycolor">
                                  {data.table_number}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                <button
                                  className="focus:outline-none text-primarycolor text-sm py-2.5 px-2 rounded-md hover:shadow-lg block"
                                  onClick={() => handleDetail(data.order_id)}
                                >
                                  <span className="content-center text-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                  </svg></span><span className="flex items-center justify-content-center">Ver pedido</span>
                                </button>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                  Mozo
                                </p>
                                <p className="text-xl flex items-center justify-content-center text-primarycolor">
                                  {data.waiter_assigned}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                {(data.payment_method === "Debito" || data.payment_method === "Mercado Pago" || data.payment_method === "Credito") ?
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1 content-center text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                  </svg>
                                  :
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1 content-center text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                }
                                <p className="flex items-center ">{data.payment_method}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-col justify-center items-center">
                              <p className="font-bold content-center text-center">Total</p>
                              <p className="font-bold text-xl content-center text-center">
                                {`$${PrecioTotal}`

                                }
                              </p>
                            </td>
                            <td className="text-center text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex-row">
                                {data.order_state === "Completado" ? (
                                  <button className="focus:outline-none text-white text-sm py-2.5 px-3 rounded-md buttonCompletado">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg> Pedido Completado
                                  </button>
                                ) : data.order_state === "Pendiente" ? (
                                  <>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg mr-2 inline"
                                      onClick={handleConfirm}
                                    >
                                      Confirmar
                                </button>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg inline"
                                      onClick={handleCancel}
                                    >
                                      Cancelar
                                </button>
                                  </>
                                ) : data.order_state === "En curso" ? (
                                  <>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg mr-2"
                                      onClick={handleConfirm}
                                    >
                                      Entregar
                                </button>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg"
                                      onClick={handleCancel}
                                    >
                                      Cancelar
                                </button>
                                  </>
                                ) : (
                                  ""
                                )}

                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                }))

                :

                (orders.filter(data => data.order_state === filtroPedidos).map((data) => {
                  PrecioTotal = 0

                  orders[data.order_id].products.forEach(product => {

                    PrecioTotal = PrecioTotal + product.price;
                    console.log(PrecioTotal);
                    return PrecioTotal;

                  }
                  )


                  return (
                    <div className="bgTableBody shadow mb-5" style={{ borderRadius: 20 }}>
                      <table className="min-w-full flex flex-col">
                        <thead className="w-full flex flex-row justify-around mt-1 mb-1">
                          <tr className="flex row space-x-48">
                            {data.order_state === "Completado" ? (
                              <td className="font-bold textGreen flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            ) : data.order_state === "En curso" ? (
                              <td className="font-bold textOrange flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            ) : (
                              <td className="font-bold textRed flex flex-col justify-start">
                                <p>{data.order_state}</p>
                              </td>
                            )}
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="flex flex-col"></td>
                            <td className="text-right font-bold text-md flex flex-col justify-end">
                              ORDER #{data.order_id}
                            </td>
                          </tr>
                        </thead>
                        <hr />
                        <tbody
                          className="w-full flex flex-row justify-around"
                        >

                          <tr key={data.order_id} className="flex flex-row space-x-20">
                            <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                              <div className="flex-col items-center">
                                <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                  Mesa
                              </p>
                                <p className="w-10 h-10  text-xl flex items-center justify-content-center font-semibold rounded-full bgTableMesa text-primarycolor">
                                  {data.table_number}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                <button
                                  className="focus:outline-none text-primarycolor text-sm py-2.5 px-2 rounded-md hover:shadow-lg block"
                                  onClick={() => handleDetail(data.order_id)}
                                >
                                  <span className="content-center text-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                  </svg></span><span className="flex items-center justify-content-center">Ver pedido</span>
                                </button>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                <p className="px-2 block text-xs content-center text-center font-semibold rounded-full text-primarycolor mb-1">
                                  Mozo
                              </p>
                                <p className="text-xl flex items-center justify-content-center text-primarycolor">
                                  {data.waiter_assigned}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex flex-col items-center">
                                {(data.payment_method === "Debito" || data.payment_method === "Mercado Pago" || data.payment_method === "Credito") ?
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1 content-center text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                  </svg>
                                  :
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1 content-center text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                }
                                <p className="flex items-center ">{data.payment_method}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-col justify-center items-center">
                              <p className="font-bold content-center text-center">Total</p>
                              <p className="font-bold text-xl content-center text-center">
                                {`$${PrecioTotal}`

                                }
                              </p>
                            </td>
                            <td className="text-center text-sm text-gray-500 flex flex-col justify-center items-center">
                              <div className="flex-row">
                                {data.order_state === "Completado" ? (
                                  <button className="focus:outline-none text-white text-sm py-2.5 px-3 rounded-md buttonCompletado">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg> Pedido Completado
                                  </button>
                                ) : data.order_state === "Pendiente" ? (
                                  <>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg mr-2 inline"
                                      onClick={handleConfirm}
                                    >
                                      Confirmar
                                </button>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg inline"
                                      onClick={handleCancel}
                                    >
                                      Cancelar
                                </button>
                                  </>
                                ) : data.order_state === "En curso" ? (
                                  <>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg mr-2"
                                      onClick={handleConfirm}
                                    >
                                      Entregar
                                </button>
                                    <button
                                      className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md button-style hover:shadow-lg"
                                      onClick={handleCancel}
                                    >
                                      Cancelar
                                </button>
                                  </>
                                ) : (
                                  ""
                                )}

                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                }))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
