

export interface PaginationProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
    totalPages: number
    
}
export const Pagination:React.FC<PaginationProps> = ({currentPage, setCurrentPage, totalPages}) => {
  return (
   <div className="flex justify-center gap-2 mt-4">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-300 text-white' : ''}`}
    >
      {i + 1}
    </button>
  ))}

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
  )
}


