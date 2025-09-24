/* eslint-disable react-refresh/only-export-components */

import type { Product } from '@/api/products';
import { createContext,  useEffect, useMemo, useState } from 'react';



type BuyNotificationContextType = {
    productNotificacion: Product[]
    setProductNotificacion: React.Dispatch<React.SetStateAction<Product[]>>   
    totalProduct: number       
    setTotalProductos: React.Dispatch<React.SetStateAction<number>>
    setTotalCantidad: React.Dispatch<React.SetStateAction<{ [id: string]: number }>>;
    totalCantidad: { [id: string]: number }
}


export const ProductContext = createContext<BuyNotificationContextType | undefined>(undefined);

export const ProductProvider = ({children}: {children: React.ReactNode}) => {
    const [totalProduct, setTotalProductos] = useState<number>(0);
    const [totalCantidad, setTotalCantidad] = useState<{ [id: string]: number }>({});
    const [productNotificacion, setProductNotificacion] = useState<Product[]>(() => {
        const stored = localStorage.getItem('productNotificacion');
        return stored ? JSON.parse(stored) : [];
      });

  
    useEffect(() => {
        localStorage.setItem('productNotificacion', JSON.stringify(productNotificacion));
      }, [productNotificacion]);

      useEffect(() => {
        const total = productNotificacion.reduce((acc, item) => acc + item.price, 0);
        setTotalProductos(total);
      }, [productNotificacion]);

    

    const contextValue = useMemo(() => ({
        productNotificacion,
        setProductNotificacion,
        totalProduct,
        setTotalCantidad,
        totalCantidad,
        setTotalProductos,
    
    }), [productNotificacion, totalProduct]);

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}

