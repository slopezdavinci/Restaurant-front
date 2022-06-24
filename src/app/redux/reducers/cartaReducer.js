import { types } from "../types/types";
import testData from "../../../core/data/testData";

const initialState = {
  cartProducts: [],
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

    case types.cartAddProduct:
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...action.payload],
      };
    case types.cartRemoveProduct:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((e) => {
          return e !== action.payload;
        }),
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

    case types.orderLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
