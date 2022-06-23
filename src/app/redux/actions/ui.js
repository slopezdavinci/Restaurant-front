import { types } from "../types/types";

export const uiOpenProductModal = () => ({
  type: types.uiOpenProductModal,  
});

export const uiCloseProductModal = () => ({
  type: types.uiCloseProductModal,  
});

export const uiOpenCategoryModal = () => ({
  type: types.uiOpenCategoryModal,  
});

export const uiCloseCategoryModal = () => ({
  type: types.uiCloseCategoryModal,  
});

export const uiOpenOrderModal = () => ({
  type: types.uiOpenOrderModal,  
});

export const uiCloseOrderModal = () => ({
  type: types.uiCloseOrderModal,  
});

export const uiStartLoading = () => ({
  type: types.uiStartLoading  
});

export const uiFinishLoading = () => ({
  type: types.uiFinishLoading
});

export const uiOpenMenuMobile = () => ({
  type: types.uiOpenMenuMobile,
});

export const setError = (error) => ({
  type: types.uiSetError,
  payload: error,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const setViewDesktop = () => ({
  type: types.uiViewDesktop,
});

export const setViewMobileTablet = () => ({
  type: types.uiViewMobileTablet,
});
