import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseOrderModal } from "../../redux/actions/ui";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const OrderModal = () => {
  const dispatch = useDispatch();

  const { orderModalOpen, Order } = useSelector((state) => state.ui);

  const orders = useSelector(state => state.carta.orders);

  const listOrders=orders[Order].products.map((product)=>
    <li key={product.product_id} className="mb-3">
       - {product.description}
    </li>
  )

  const closeModal = () => {
    dispatch(uiCloseOrderModal());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal
      isOpen={orderModalOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className={
        orderModalOpen
          ? "modal animate__animated animate__fadeIn"
          : "modal animate__animated animate__fadeOut"
      }
      overlayClassName="modal-fondo"
    >
      <h3 className="h3"> Pedido </h3>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <ul className="mt-5 mb-5 mr-5 ml-5">{listOrders}</ul>

        <button
          type="submit"
          className="focus:outline-none text-white text-sm py-2.5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg mb-2 mt-1 button-cards"
          onClick={closeModal}
        >
          <span> Salir </span>
        </button>
      </form>
    </Modal>
  );
};
