import { shoppingCartActions } from "../reducers/shoppingCart";

export const addProduct = (productData) => {
  return {
    type: shoppingCartActions.ADD_PRODUCT,
    newProduct: productData,
  };
};
