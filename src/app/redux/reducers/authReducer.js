import { types } from "../types/types";

const initialState = {
  uid: null,
  uname: null,
  uIsAdmin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {    
    case types.userLogin:
      return {
        uid: action.payload.uid,
        uname: action.payload.displayName,
        uIsAdmin:action.payload.isAdmin
      };
    
    case types.userLogout:
      return {};

    default:
      return state;
  }
};
