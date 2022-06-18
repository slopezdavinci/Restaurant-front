import Swal from "sweetalert2";
import { fetchSinToken } from "../../../core/helpers/fetch";
import api from "../../../core/network/ApiAxios";
import { types } from "../types/types";
import { eventLogout } from "./events";

export const startLogin = (user) => {
  return (dispatch) => {
    localStorage.setItem("token", user.id);
    localStorage.setItem("token-init-date", new Date().getTime());

    dispatch(
      userLogin({
        uid: user.id,
        displayName: user.firstName,
        isAdmin: user.isAdmin,
      })
    );
  };
};

export const startRegister = (firstName, lastName, email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "user/",
      {
        id: 0,
        firstName,
        lastName,
        email,
        password,
        isAdmin: false,
        deprecated: false,
      },
      "POST"
    );

    console.log(resp);

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.id);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        userLogin({
          uid: body.id,
          displayName: body.fisrtname,
          isAdmin: body.isAdmin,
        })
      );

      Swal.fire("Se ha registrado con exito!", "success");
    } else {
      Swal.fire("Error", body.message, "error");
      console.log(body.message);
    }
  };
};

export const userLogin = ({ uid, displayName, isAdmin }) => ({
  type: types.userLogin,
  payload: {
    uid,
    displayName,
    isAdmin,
  },
});

export const userLogout = () => ({
  type: types.userLogout,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(userLogout());
    dispatch(eventLogout());
  };
};

export const reloadUser = (id) => {
  return async (dispatch) => {
    const users = await api.get(`/user/`);

    console.log(`usuarios ${JSON.stringify(users.data)}`)

    const user = users.data.find((user) => user.id === parseInt(id));

    console.log(`usuario encontrado ${JSON.stringify(user)}`)

    dispatch(
      userLogin({
        uid: user.id,
        displayName: user.firstName,
        isAdmin: user.isAdmin,
      })
    );
  };
};
