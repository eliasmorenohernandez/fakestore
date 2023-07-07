/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 13:09:42
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import CartItem from "../components/CartItem";
import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart, totalPrice,totalProductsCart },
  } = useCartContext();

  return (
    <div>
      <h1>Carrito</h1>
      <div className="flex justify-between items-center">
        {totalProductsCart ?
        <>
        <div className="flex flex-col gap-4">
          {cart.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
        </div>
        <div className="font-bold text-3xl">TOTAL: ${totalPrice}</div>
        </>
          :
          <h2 className="font-bold text-blue-500">No hay prodcutos cargados en el carrito</h2>
        }
      </div>
    </div>
  );
};

export default Cart;