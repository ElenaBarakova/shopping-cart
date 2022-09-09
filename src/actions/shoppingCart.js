import { shoppingCartActions } from "../constants/constants";

export const addProduct = (productData) => {
  return {
    type: shoppingCartActions.ADD_PRODUCT,
    newProduct: productData,
  };
};

export const removeProduct = (productData) => {
  return {
    type: shoppingCartActions.REMOVE_PRODUCT,
    currentProduct: productData,
  };
};

export const clearCart = () => {
  return {
    type: shoppingCartActions.CLEAR_CART,
  };
};
