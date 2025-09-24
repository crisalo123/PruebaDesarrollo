import axiosCustomer from "./axiosCustomer";

type rating = {
  count: number;
  rate: number;
};

export interface Product {
  id: number;
  title: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
}

export const getProducts = async (id?: number): Promise<Product[]> => {
  if (id) {
    const response = await axiosCustomer.get(`/products/${id}`);
    return [response.data];
  } else {
    const response = await axiosCustomer.get("/products");
    return response.data;
  }
};

export const putProductos = async (id: number, data: Partial<Product>) => {
  try {
    const response = await axiosCustomer.put(`/products/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};
