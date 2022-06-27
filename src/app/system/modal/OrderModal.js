import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearActiveOrder,
  startModifyPurchase,
} from "../../redux/actions/events";
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

const initEvent = {
  id: "",
  userId: "",
  price: "",
  dateOfPurchase: "",
  state: "",
};

export const OrderModal = () => {
  const dispatch = useDispatch();

  const { orderModalOpen } = useSelector((state) => state.ui);

  const { activeOrder } = useSelector((state) => state.carta);

  const [formValues, setFormValues] = useState(initEvent);

  const { id, userId, price, dateOfPurchase, state } = formValues;

  useEffect(() => {
    if (activeOrder) {
      setFormValues(activeOrder);
    }
  }, [activeOrder, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseOrderModal());
    dispatch(clearActiveOrder());
    setFormValues(initEvent);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(formValues);

    dispatch(startModifyPurchase(formValues));

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
        <div className="form-group d-none">
          <input
            type="text"
            className="form-control"
            rows="5"
            name="id"
            value={id}
            disabled
          />
        </div>
        <div className="form-group">
          <label>ID Cliente</label>
          <input
            type="text"
            className="form-control"
            rows="5"
            name="userId"
            value={userId}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input
            type="text"
            className="form-control"
            rows="5"
            name="price"
            value={price}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Fecha de compra</label>
          <input
            type="text"
            className="form-control"
            rows="5"
            name="dateOfPurchase"
            value={dateOfPurchase}
            disabled
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text">Estado</label>
          <select
            className="form-select"
            name="state"
            onChange={handleInputChange}
            defaultValue={activeOrder && activeOrder.state}
          >
            <option value={"IN_TRANSIT"}>EN CURSO</option>
            <option value={"PENDING"}>PENDIENTE</option>
            <option value={"COMPLETED"}>COMPLETADO</option>
          </select>
        </div>
        <button
          type="submit"
          className="focus:outline-none text-white text-sm py-2.5 rounded-md button-style hover:bg-purple-600 hover:shadow-lg mb-2 mr-3 mt-1 button-cards"
          onClick={handleSubmitForm}
        >
          <span> Guardar </span>
        </button>
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
