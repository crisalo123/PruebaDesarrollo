import { Card } from "@/components";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useNavigate, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useProductContext } from "@/contex/productContext";
import { IoIosReturnLeft } from "react-icons/io";

export  default function DetailProductsPages()  {
  const { id } = useParams();
 

  
 
  const numericId = id ? Number(id) : undefined;

  const { products } = useProducts(numericId);
  const { setProductNotificacion, productNotificacion } = useProductContext();
  const navigations = useNavigate();

  const handleReturn = () => {
   navigations(-1)
  }

  const buyProduct = (productId: number) => {
  const productToAdd = products.find(p => p.id === productId);
  if (!productToAdd) return; 
  const existingProduct = productNotificacion.find(p => p.id === productId);

  if (existingProduct) {
    const updatedProducts = productNotificacion.map(p =>
      p.id === productId ? { ...p, quantity: p.quantity  + 1 } : p
    );
    setProductNotificacion(updatedProducts);
    alert('Producto agregado al carrito');
  } else {
    setProductNotificacion([...productNotificacion, { ...productToAdd, quantity: 1 }]);
     alert('Producto ya fue agregado al carrito');
  }
};


  if(!id){
    return <div>Cargando...</div>
  } 





  return (
     <div className="bg-gray-50 min-h-screen">
       <Header />
       <IoIosReturnLeft  onClick={()=> handleReturn()} className=" top-5 mx-3 text-gray-500 cursor-pointer h-7 w-7" />
       <h1 className="text-2xl p-4 font-semibold text-gray-500">Detalles de producto</h1>
       <div className=" w-10/12 justify-center mx-auto">
        {products.map(product => (
         <Card key={product.id} className="grid grid-cols-2 bg-white rounded-lg shadow-md overflow-hidden h-full m-4">
            <div className="bg-gray-200"> 
              <img
                src={product.image}
                alt={product.title}
                className="h-72 p-4 object-cover rounded-t-lg mx-auto"
              />

            </div>  
            <div className="p-4 col-span-1 gap-2 space-y-10">
              <h2 className="text-lg font-semibold">{product.title}</h2>  
              <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
              <p className="text-gray-600 text-sm  font-semibold line-clamp-3">{product.category}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              
              <div> 
                <Button onClick={() => buyProduct(product.id)} className="bg-blue-400 text-white ">
                  <FaShoppingCart /> Add to cart
               </Button>
              </div>
            </div>
           
          </Card>
        ))}
       </div>
    </div>
  )
}


