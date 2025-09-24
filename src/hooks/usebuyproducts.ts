import type { Product } from "@/api/products";
import { useState } from "react";

export const useBuyProducts = (
  products: Product[],
  itemsPerPage: number,
  currentPage: number
) => {
  const [filters, setFilters] = useState({
    description: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(filters.description.toLowerCase()) &&
      (filters.category ? product.category === filters.category : true)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return {
    totalPages,
    currentProducts,
    handleChange,
  };
};
