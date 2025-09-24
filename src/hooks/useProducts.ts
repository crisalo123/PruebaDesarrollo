import { getProducts, type Product } from "@/api/products";
import { useEffect, useState } from "react";






export const useProducts = (id?:number) => {
   const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const productsData = await getProducts(id);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    getDataProducts();
  }, [id]);
    
  return {
    products

  }
}


