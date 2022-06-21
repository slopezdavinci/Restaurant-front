import { types } from "../types/types";
import testData from "../../../core/data/testData";

const initialState = {
  orders: [testData.orders][0],
  activeOrder: null,
  activeEvent: null,
};

export const cartaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productSetActive:
      return {
        ...state,
        activeProduct: action.payload,
      };
    case types.categorySetActive:
      return {
        ...state,
        activeCategory: action.payload,
      };

    case types.orderAddNew:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case types.productClearActive:
      return {
        ...state,
        activeProduct: null,
      };
      case types.categoryClearActive:
      return {
        ...state,
        activeCategory: null,
      };

    case types.orderUpdated:
      return {
        ...state,
        orders: state.orders.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.orderLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
