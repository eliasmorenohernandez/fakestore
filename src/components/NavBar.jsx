/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 10:58:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useCartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom";
const NavBar = () => {

  const {
    state: { totalProductsCart },
  } = useCartContext();

  return (
    <nav className="h-25 w-full bg-black p-4 flex justify-between text-white ">
      <Link to="/">
        <span>FakeStore</span>
      </Link>
      <Link to="/carrito">
        <div className="relative py-2">
          <div className="absolute left-4">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-blue-600 p-3 text-xs text-white">{totalProductsCart}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
          </svg>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;