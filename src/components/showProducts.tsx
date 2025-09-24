import React from 'react'
import { Pagination } from './ui/pagination'
import { Card } from './ui/card'
import { Button } from './ui/button'
import type { Product } from '@/api/products'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '@/contex/productContext'


export interface ShowProductstype {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentProducts: Product[]
    currentPage:number
    totalPages:number
    islocations:boolean


}

export const ShowProducts:React.FC<ShowProductstype> = ({setCurrentPage, currentProducts, currentPage, totalPages, islocations}) => {
      const navigate = useNavigate();
      const {  setProductNotificacion} = useProductContext();

     const handleViewDetails = (id: number) => {
        navigate(`/home/${id}`);
    }
    const handleDeleteProduct = (id:number) => {
    setProductNotificacion(prev => 
        prev.filter(product => product.id !== id)
    )
    }

  return (
    <>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {currentProducts.map(product => (
          <Card key={product.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="h-52 p-4 object-cover rounded-t-lg mx-auto"
              />
            </div>  
            <div className="p-4 flex-1 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm line-clamp-3">{product.category}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
            </div>
            <div className="p-2  ">
              <Button onClick={() => handleViewDetails(product.id)} className="bg-blue-500 w-32 hover:bg-blue-600 text-white">{islocations ? 'Editar' : 'Ver +'}</Button>
               {islocations && (
                 <Button  onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 hover:bg-red-600 mx-3 2xl:mx-20 w-32 text-white">Eliminar </Button>  
               )}
               
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
      <Pagination currentPage={currentPage}  setCurrentPage={setCurrentPage} totalPages={totalPages}/>
      </div>
    </>
  )
}

