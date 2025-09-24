import { Card } from "@/components";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { Search } from "@/components/ui/search";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePages() {
   const [itemsPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState (1)

    const [filters, setFilters] = useState( 
       {
          description: "",
          category: "",
        }
  );
  const { products } = useProducts();
  const navigate = useNavigate();

  const handleViewDetails = (id: number) => {
        navigate(`/home/${id}`);
    }

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
const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);





  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Search  handleChange={handleChange} />
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
            <div className="p-2 ">
              <Button onClick={() => handleViewDetails(product.id)} className="bg-blue-300 w-32 text-white">Ver +</Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
      <Pagination currentPage={currentPage}  setCurrentPage={setCurrentPage} totalPages={totalPages}/>
      </div>
    </div>
  );
}
