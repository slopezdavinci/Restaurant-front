import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
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
