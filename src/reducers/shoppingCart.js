import { shoppingCartActions } from "../constants/constants";

const initialState = {
  products: [],
  total: 0,
};

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case shoppingCartActions.ADD_PRODUCT:
      // TOTAL logic:
      const productAlreadyInTheCart = state.products.find(
        (product) => product._id === action.newProduct._id
      );
      // if the product exists, increment its "quantity", remove the product from the state(filter) and return the state + the modified object
      if (productAlreadyInTheCart) {
        action.newProduct.quantity = Number(action.newProduct.quantity) + 1;
        return {
          products: state.products,
          total: state.total + Number(action.newProduct.price),
        };
      } else {
        return {
          products: [...state.products, action.newProduct],
          total: state.total + Number(action.newProduct.price),
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
      };
    case shoppingCartActions.CLEAR_CART:
      return initialState;

    default:
      return initialState;
  }
};

export default shoppingCart;
