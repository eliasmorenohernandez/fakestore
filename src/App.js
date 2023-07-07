/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 10:57:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./provider/CartProvider";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="min-h-screen flex flex-col">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/carrito" exact element={<Cart />} />
            <Route path="/productodetalle" exact element={<ProductoDetalle /> } />
          </Routes>
        </main>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;