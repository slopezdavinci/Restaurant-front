import { types } from "../types/types";
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../../../core/helpers/fetch";

export const startAddNewProduct = (product, categories) => {
  return async (dispatch) => {
     
    const category= categories.find((category) => category.id === parseInt(product.category));

    try {
      const resp = await fetchSinToken(
        "product/",
        {
          id: 0,
          name: product.title,
          description: product.description,
          price: parseInt(product.price),
          stock: parseInt(product.stock),
          imageUrl: product.urlImage,
          category: category,
          deprecated: false
        },
        "POST"
      );

      const body = await resp.json();

      if (body.ok) {
        /*event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: uname,
        };*/
       
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const setActiveProduct = (product) => ({
  type: types.productSetActive,
  payload: product,
});

export const clearActiveProduct = () => ({
  type: types.productClearActive,
});

export const setActiveCategory = (category) => ({
  type: types.categorySetActive,
  payload: category,
});

export const clearActiveCategory = () => ({
  type: types.categoryClearActive,
});

export const startEventUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "PUT");

      const body = await resp.json();

      if (body.ok) {
       // dispatch(eventUpdated(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startEventDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent;

    try {
      const resp = await fetchConToken(`events/${id}`, {}, "DELETE");

      const body = await resp.json();

      if (body.ok) {
     //   dispatch(eventDeleted());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const eventLogout = () => ({
  type: types.eventLogout,
});


