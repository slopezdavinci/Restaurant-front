import { types } from "../types/types";
import testData from "../../../core/data/testData";

const initialState = {
  orders: [testData.orders][0],
  activeOrder: null,
  activeEvent: null,
};

export const cartaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SetActiveOrder:
      return {
        ...state,
        activeOrder: action.payload,
      };

    case types.orderAddNew:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case types.orderClearActiveOrder:
      return {
        ...state,
        activeOrder: null,
      };

    case types.orderUpdated:
      return {
        ...state,
        orders: state.orders.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        orders: state.orders.filter((e) => e.id !== state.activeOrder.id),
        activeEvent: null,
      };
    case types.orderLoaded:
      return {
        ...state,
        orders: [...action.payload],
      };
    case types.orderLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
