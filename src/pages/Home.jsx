/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 01/07/2023 - 10:58:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useEffect, useState } from "react";
import useAPI from "../hooks/useApi";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../provider/CartProvider";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { getProducts } = useAPI();
  const { state: { cart } } = useCartContext();
  const [buscarProducto, setBuscarProducto] = useState("")


    useEffect(() => {
      getProducts()
        .then((data) => {
          console.log("data Original: ");
          console.log(data);
          setProducts(data)
          setLoading(false)
        })
        .catch((err) => console.log(err));
  }, []);

    useEffect(() => {
      getProducts()
        .then((data) => {
          data = data.filter((product) => product.title.toLowerCase().includes(buscarProducto.toLowerCase()))
          setProducts(data)
          setLoading(false)
        })
        .catch((err) => console.log(err));
    }, [buscarProducto])

  function handleChange(event) {
    setLoading(true)
    setBuscarProducto(event.target.value);
  }

  
  return (
    <div className="flex-1 flex flex-col gap-4 p-4">
      <div className="h-25 w-full p-4 flex justify-between">
        <h1>FakeStore</h1>
        <input type="text" id ="buscarProducto"placeholder="Buscar" onChange={handleChange}/>
      </div>
      {loading && <p>Cargando...</p>}
      {!loading && <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
        {products.map((product) => 
        (
          <ProductItem key={product.id} product={ product} />
        ))}
      </div>}
    </div>
  );
};

export default Home;