import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  viewDesktop: false,
  menuMobileOpen: false,
  loading: false,
  Order: 0
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
        Order: action.payload,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,        
      };

    case types.uiStartLoading:
       return {
          ...state,
          loading: true,        
        };
    case types.uiFinishLoading:
        return {
            ...state,
            modalOpen: false,        
        };

    case types.uiOpenMenuMobile:
      return {
        ...state,
        menuMobileOpen: !state.menuMobileOpen,
      };

    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };
    case types.uiViewDesktop:
      return {
        ...state,
        viewDesktop: true,
      };
    case types.uiViewMobileTablet:
      return {
        ...state,
        viewDesktop: false,
      };

    default:
      return state;
  }
};
