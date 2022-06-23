import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseCategoryModal } from "../../redux/actions/ui";
import {
  clearActiveCategory,
  startAddNewCategory,
  startModifyCategory,
} from "../../redux/actions/events";

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
  name: "",  
  deprecated: "",
};

export const CategoryModal = () => {
  const dispatch = useDispatch();

  const { categoryModalOpen } = useSelector((state) => state.ui);

  const { activeCategory } = useSelector((state) => state.carta);

  const [tittleValid, setTittleValid] = useState(true);

  const [formValues, setFormValues] = useState(initEvent);
 
  const { name , deprecated} = formValues;

  useEffect(() => {
    if (activeCategory) {
      setFormValues(activeCategory);
    } else {
      setFormValues(initEvent);
    }
  }, [activeCategory, setFormValues]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
    dispatch(uiCloseCategoryModal());
    dispatch(clearActiveCategory());
    setFormValues(initEvent);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      return setTittleValid(false);
    }

    if (activeCategory) {
      dispatch(startModifyCategory(formValues));
    } else {
      dispatch(startAddNewCategory(formValues));
    }

    setTittleValid(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={categoryModalOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1 className="h3">
        {" "}
        {activeCategory ? "Editar categoria" : "Nueva categoria"}
      </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
        <hr />
        <div className="form-group">
          <label>Categoria</label>
          <input
            type="text"
            className={`form-control ${!tittleValid && "is-invalid"}`}
            placeholder="Nombre del producto"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <select className="form-select" name="deprecated" onChange={handleInputChange} value={deprecated}>            
                <option value={true}>Si</option>
                <option value={false}>No</option> 
          </select>

        <button
          type="submit"
          className="btn ml-5 button-style"          
          onClick={handleSubmitForm}
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
