import { types } from "../types/types";
import Swal from "sweetalert2";
import { fetchConToken } from "../../../core/helpers/fetch";
import { fileUpload } from "../../../core/helpers/fileUpload";

export const startAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchConToken("events", event, "POST");
      const body = await resp.json();

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name,
        };

        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const setActiveOrder = (event) => ({
  type: types.eventSetActiveOrder,
  payload: event,
});

export const eventClearActiveOrder = () => ({
  type: types.eventClearActiveOrder,
});

export const startEventUpdate = (event) => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`events/${event.id}`, event, "PUT");

      const body = await resp.json();

      if (body.ok) {
        dispatch(eventUpdated(event));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventUpdated = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const startEventDelete = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent;

    try {
      const resp = await fetchConToken(`events/${id}`, {}, "DELETE");

      const body = await resp.json();

      if (body.ok) {
        dispatch(eventDeleted());
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventDeleted = () => ({
  type: types.eventDeleted,
});

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("events");

      const body = await resp.json();

      const events = body.eventos;

      dispatch(eventLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventLogout = () => ({
  type: types.eventLogout,
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeEvent } = getState().notes;

    Swal.fire({
      title: "Subiendo...",
      text: "Por favor espere...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);

    activeEvent.url = fileUrl;

    dispatch(startEventUpdate(activeEvent));

    Swal.close();
  };
};
