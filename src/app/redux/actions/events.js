import { types } from "../types/types";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../../core/helpers/fetch";
import api from "../../../core/network/ApiAxios";

export const startAddNewProduct = (product, categories) => {
  return async (dispatch) => {
    const category = categories.find(
      (category) => category.id === parseInt(product.category)
    );

    console.log(category);
    console.log(product);
    try {
      const resp = await fetchSinToken(
        "product/",
        {
          id: 0,
          name: product.name,
          description: product.description,
          price: parseInt(product.price),
          stock: parseInt(product.stock),
          imageUrl: product.imageUrl,
          category: category,
          deprecated: false,
        },
        "POST"
      );

      const body = await resp.json();

      if (!body.ok) {
        console.log(body.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startModifyProduct = (product, categories) => {
  return async (dispatch) => {
    const category = categories.find(
      (category) => category.id === parseInt(product.category.id)
    );

    try {
      const resp = await fetchSinToken(
        "product/",
        {
          id: product.id,
          name: product.name,
          description: product.description,
          price: parseInt(product.price),
          stock: parseInt(product.stock),
          imageUrl: product.imageUrl,
          category: category,
          deprecated: product.deprecated,
        },
        "PUT"
      );

      const body = await resp.json();

      if (!body.ok) {
        console.log(body.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewCategory = (category) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        "category/",
        {
          id: 0,
          name: category.name,
          deprecated: false,
        },
        "POST"
      );

      const body = await resp.json();

      if (!body.ok) {
        console.log(body.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startModifyCategory = (category) => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(
        "category/",
        {
          id: category.id,
          name: category.name,
          deprecated: category.deprecated,
        },
        "PUT"
      );

      const body = await resp.json();

      if (!body.ok) {
        console.log(body.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const startAddNewPurchase = (cartProducts, userId) => {
  return async (dispatch) => {
    console.log(cartProducts.length);
    if (cartProducts.length > 0) {
      let productList = [];
      cartProducts.forEach((cartProduct) => {
        let exist = productList.find(
          (element) => element.productId === cartProduct.id
        );
        if (exist) {
          exist.amount += 1;
        } else {
          productList.push({ productId: cartProduct.id, amount: 1 });
        }
      });

      try {
        const resp = await fetchSinToken(
          "purchase/",
          {
            userId: userId,
            productList: productList,
          },
          "POST"
        );

        Swal.fire({
          icon: "success",
          title: "Muchas gracias!",
          text: "Su compra ha sido realizada con exito, en la seccion de 'Mis pedidos' puede ver el estado del mismo",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Atencion!",
          text: error,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Atencion!",
        text: "Debe añadir algun producto al carrito antes de comprar!",
      });
    }
  };
};

export const startModifyPurchase = (purchase) => {
  return async (dispatch) => {
    try {
      console.log(purchase.id);
      const resp = await api.put(`/purchase/updateStatus?purchaseId=${purchase.id}&state=${purchase.state}`);
      
      

   
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddingToCart = (product) => ({
  type: types.cartAddProduct,
  payload: product,
});

export const clearCart = () => ({
  type: types.cartClear,
});

export const cartCount = (counter) => ({
  type: types.cartProductCounter,
  payload: counter,
});

export const RemovingFromCart = (cartProductId) => ({
  type: types.cartRemoveProduct,
  payload: cartProductId,
});

export const setActiveProduct = (product) => ({
  type: types.productSetActive,
  payload: product,
});

export const clearActiveProduct = () => ({
  type: types.productClearActive,
});

export const setActiveCategory = (category) => ({
  type: types.categorySetActive,
  payload: category,
});

export const clearActiveCategory = () => ({
  type: types.categoryClearActive,
});

export const setActiveOrder = (order) => ({
  type: types.orderSetActive,
  payload: order,
});

export const clearActiveOrder = () => ({
  type: types.orderClearActive,
});
