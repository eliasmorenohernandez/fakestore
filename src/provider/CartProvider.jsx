/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 13:09:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "TOTAL_PRICE":
      return {
        ...state,
        totalPrice: state.cart.reduce((prev, product) => prev + product.price,0),
      };
    case "TOTAL_PRODUCTS_CART":
      return {
        ...state,
        totalProductsCart: state.cart.length,
      };
    case "PRODUCTO_DETALLE":
      return {
        ...state,
        productoDetalle: action.payload,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("state")) ?? { cart: [], totalPrice: 0, totalProductsCart: 0, productoDetalle: null }
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
    dispatch({ type: "TOTAL_PRODUCTS_CART" });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };