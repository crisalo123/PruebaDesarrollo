import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <div className=' w-full h-14  bg-white border-[1.4px] border-gray-200 flex justify-between items-center'>
        <h1 className='text-2xl mx-10 font-bold '>ShopCatalog</h1>
        <FaShoppingCart className='h-6 w-6  mx-10 text-gray-500' />
    </div>
  )
}


