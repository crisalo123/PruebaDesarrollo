import { useContext } from "react";
import { ProductContext } from "./useContext";

export const useProductContext = () => {    
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext debe usarse dentro de un ProductProvider");
    }
    return context;
}