/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 02/07/2023 - 02:18:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/07/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useCartContext } from "../provider/CartProvider";
import { Link } from "react-router-dom";


const ProductoDetalle = () => {
  const { dispatch, state: { cart, productoDetalle },  } = useCartContext();
  const prodEncCarrito = cart.filter((prod) => prod.id === productoDetalle.id);
  let estrellasRaiting = [];
  for (let index = 0; index < productoDetalle.rating.rate; index++) {
    estrellasRaiting.push(index); 
    
  }

  return (
    <>
      <div className="h-25 w-full p-4 flex justify-between ">
      <h1 className="text-left">Detalle del Producto</h1>
      <Link to="/">
        <span>Regresar a Tienda</span>
      </Link>
      </div>  
      
      <div><br /></div>
      <div className="flex flex-col border border-blue-400 shadow-sm rounded-xl p-4">
        <div className="mx-auto mt- max-w-2xl sm:px-6 lg:grid lg:grid-cols-1 lg:gap-y-8">
        <img
          src={productoDetalle.image}
          alt={productoDetalle.title}
          className="h-80 object-cover self-center"
          />
        </div>
        <div className="max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="font-bold text-center text-blue-600">{productoDetalle.title}</h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h1 className="font-bold">Información del Poducto</h1>
            <p className="text-3xl tracking-tight text-green-900">${productoDetalle.price}</p>
            <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
                <div className="flex items-center">
                {estrellasRaiting.map((estrella) => 
                (
                  <svg className="text-yellow-500 h-5 w-5 flex-shrink-0"  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path>
                    </svg>
                ))}
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="font-bold text-violet-900 hover:text-violet-600">{productoDetalle.rating.rate } de 5 estrellas</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-bold text-gray-700 hover:text-gray-500">{productoDetalle.rating.count} reseñas</h2>
              </div>
              <div className="flex items-center">
                {prodEncCarrito.length
                  ?
                  <>
                    <button
                    className="bg-red-600 hover:bg-red-400 text-white rounded-md p-2 mt-2"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: productoDetalle });
                      alert("Producto eliminado del carrito");
                    }}
                    >
                    Eliminar Producto
                    </button>
                  </>
                  :
                  <>
                    <button
                    className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2"
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: productoDetalle });
                      alert("Producto añadido al carrito");
                    }}
                    >
                    Añadir al carrito
                    </button>
                  </>
                  }
               </div>
          </div>
        </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="font-bold text-gray-800">Categoría:</h3>
              <div cclassNamelass="space-y-6">
                <p className="text-base text-gray-900 text-justify">{productoDetalle.category}</p>
                </div>
              <h3 className="font-bold text-gray-800">Descripción:</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900 text-justify">{ productoDetalle.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductoDetalle;