import { Card } from "@/components";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import {  useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export  default function DetailProductsPages()  {
  const { id } = useParams();
  
 
  const numericId = id ? Number(id) : undefined;

  const { products } = useProducts(numericId);


  if(!id){
    return <div>Cargando...</div>
  } 




 console.log(products);
  return (
     <div className="bg-gray-50 min-h-screen">
       <Header />
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
                <Button className="bg-blue-400 text-white ">
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


