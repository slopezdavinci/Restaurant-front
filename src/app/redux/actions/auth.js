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
    try{
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

   
      Swal.fire("success","Buenas noticias!", "Se ha registrado con exito!");
  }catch(error){
    Swal.fire("error","Error!", error);
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
  };
};

export const reloadUser = (id) => {
  return async (dispatch) => {
    const users = await api.get(`/user/`);

    const user = users.data.find((user) => user.id === parseInt(id));
   
    dispatch(
      userLogin({
        uid: user.id,
        displayName: user.firstName,
        isAdmin: user.isAdmin,
      })
    );
  };
};
