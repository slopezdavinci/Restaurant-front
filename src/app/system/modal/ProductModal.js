import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../redux/actions/ui";
import { startUploading } from "../../redux/actions/events";

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
  title: "",
  price: "",
  urlImage: "",
};

export const ProductModal = () => {
  const dispatch = useDispatch();

  const { modalOpen } = useSelector((state) => state.ui);

  const { activeEvent } = useSelector((state) => state.carta);

  const [tittleValid, setTittleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);

  const { title, price, urlImage, descripcion } = formValues;

  useEffect(() => {
    if (activeEvent) {
      setFormValues(activeEvent);
    } else {
      setFormValues(initEvent);
    }
  }, [activeEvent, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseModal());
    setFormValues(initEvent);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (title.trim().length < 2) {
      return setTittleValid(false);
    }

    if (activeEvent) {
      //dispatch(startEventUpdate(formValues));
    } else {
     // dispatch(startAddNew(formValues));
    }

    setTittleValid(true);
    closeModal();
  };

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <Modal
      isOpen={modalOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> {activeEvent ? "Editar producto" : "Nuevo producto"}</h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <hr />
        <div className="form-group">
          <label>Producto</label>
          <input
            type="text"
            className={`form-control ${!tittleValid && "is-invalid"}`}
            placeholder="Nombre del producto"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="text"
            className="form-control"
            placeholder="Precio"
            rows="5"
            name="price"
            value={price}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Descripcion"
            rows="5"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <label>Imagen</label>
          <br />
          <input id="fileSelector" type="file" onChange={handleFileChange} />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button
          type="submit"
          className="btns btns-block ml-5"
          variant="success"
          active
          onClick={handlePictureUpload}
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
