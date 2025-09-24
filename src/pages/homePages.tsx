
import { Header } from "@/components/layout/header";
import { ShowProducts } from "@/components/showProducts";
import { Search } from "@/components/ui/search";
import { useProductContext } from "@/contex/productContext";
import { useBuyProducts } from "@/hooks/usebuyproducts";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function HomePages() {
  
const [itemsPerPage] = useState(4)
const [currentPage, setCurrentPage] = useState (1)
const { productNotificacion } = useProductContext();
const { products } = useProducts();
const location = useLocation()
const islocations = location.pathname.includes('/home/buyProduc')
const productosLocations = islocations ? productNotificacion : products
const title = islocations ? 'Productos agregados al carrito' : 'Nuestros productos'
 



const { currentProducts, totalPages, handleChange} = useBuyProducts( productosLocations,itemsPerPage,currentPage)

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <h1 className="text-center text-lg md:text-2xl text-blue-500 pt-6">{title}</h1>
      <Search  handleChange={handleChange} />
       <ShowProducts currentPage={currentPage} currentProducts={currentProducts} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
