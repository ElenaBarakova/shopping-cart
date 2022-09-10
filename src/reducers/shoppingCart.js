import { shoppingCartActions } from "../constants/constants";

const initialState = {
  products: [],
  total: 0,
  totalProducts: 0,
};

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartActions.ADD_PRODUCT:
      const productAlreadyInTheCart = state.products.find(
        (product) => product._id === action.newProduct._id
      );
      const products = state.products.filter((product) => {
        return product._id !== action.newProduct._id;
      });
      if (productAlreadyInTheCart) {
        productAlreadyInTheCart.quantity =
          Number(action.newProduct.quantity) + 1;
        return {
          products: [...products, productAlreadyInTheCart],
          total: state.total + Number(action.newProduct.price),
          totalProducts: state.totalProducts + 1,
        };
      } else {
        return {
          products: [...state.products, action.newProduct],
          total: state.total + Number(action.newProduct.price),
          totalProducts: state.totalProducts + 1,
        };
      }
    case shoppingCartActions.REMOVE_PRODUCT:
      const productsLeft = state.products.filter(
        (product) => product._id !== action.currentProduct._id
      );

      return {
        products: productsLeft,
        total:
          state.total -
          Number(action.currentProduct.price) *
            Number(action.currentProduct?.quantity),
        totalProducts:
          state.totalProducts - Number(action.currentProduct.quantity),
      };
    case shoppingCartActions.CLEAR_CART:
      return initialState;

    default:
      return initialState;
  }
};

export default shoppingCart;
