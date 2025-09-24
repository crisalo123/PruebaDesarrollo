
import { useProductContext } from "@/contex/productContext";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Header = () => {
   const { productNotificacion } = useProductContext();
   const navigate = useNavigate()

   const handleNavigate = () => {
      navigate(`/home/buyProduc`)
   }

   const handleNabigateHome = () => {
     navigate('/home')
   }

   
  return (
    <div className=' w-full h-14  bg-white border-[1.4px] border-gray-200 flex justify-between items-center'>
        <Button className='text-2xl mx-10 font-bold bg-none ' type="button" onClick={() =>handleNabigateHome() }>ShopCatalog</Button>
        {productNotificacion.length > 0 && (<span onClick={()=> handleNavigate()} className="absolute top-2 right-14 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {productNotificacion.length}
        </span> )}
        <FaShoppingCart className='h-6 w-6  mx-10 text-gray-500' />
    </div>
  )
}


