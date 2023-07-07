/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 12:11:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useCartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { dispatch, state: { cart} } = useCartContext();
  const prodEncCarrito = cart.filter((prod) => prod.id === product.id);
  return (
    <div className="flex flex-col border border-gray-300 shadow-sm rounded-xl p-4">
      <Link to="/productodetalle">
      <a href="#" onClick={() => {
        dispatch({ type: "PRODUCTO_DETALLE", payload: product });
      }}>
      <img
        src={product.image}
        alt={product.title}
        className="h-28 object-cover self-center"
      />
      <h2 className="font-bold">{product.title}</h2>
        <span>${product.price}</span>
        </a>
      </Link>
      {prodEncCarrito.length
        ?
        <>
          <span className="font-bold text-blue-700 text-center">Producto agregado</span>
          <button
          className="bg-red-600 hover:bg-red-400 text-white rounded-md p-2 mt-2"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
            alert("Producto eliminado del carrito");
          }}
          >
          Eliminar
          </button>
        </>
        :
        <>
          <button
          className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
            alert("Producto añadido al carrito");
          }}
          >
          Añadir al carrito
          </button>
        </>
      }
      
    </div>
  );
};

export default ProductItem;