
import { putProductos, type Product } from '@/api/products'
import { Modal } from './modal'
import { Input } from './input'

export interface ModalProductosProps {
    filterModal: Product[]
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setEditedProduct: React.Dispatch<React.SetStateAction<Partial<Product>>>
    editedProduct: Partial<Product>
    setProductNotificacion: React.Dispatch<React.SetStateAction<Product[]>>
}

export const ModalPutProduct:React.FC<ModalProductosProps> = ({filterModal, isOpen, setIsOpen, setEditedProduct, editedProduct, setProductNotificacion}) => {


const putProduct = async (id: number) => {
  try {
    await putProductos(id, editedProduct);
    setProductNotificacion(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          const updatedProduct = {
            ...product,      
            ...editedProduct, 
          };
          return updatedProduct;
        }
        return product;
      });
    });

    // Cerrar modal
    setIsOpen(false);
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
  }
};
  return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edicion de producto">
          {filterModal.map(product => (
             <div key={product.id} className="p-4 flex-1 flex flex-col gap-2">
            <Input
              value={editedProduct.title ?? product.title}
               onChange={(e) => setEditedProduct(prev => ({ ...prev, title: e.target.value }))}
             />
             
             <Input
               value={editedProduct.category ?? product.category}
               onChange={(e) => setEditedProduct(prev => ({ ...prev, category: e.target.value }))}
             />
             
             <Input
               type="number"
               value={editedProduct.price ?? product.price}
               onChange={(e) => setEditedProduct(prev => ({ ...prev, price: Number(e.target.value) }))}
             />
        <button
          onClick={() => putProduct(product.id)}
          className="mt-4 w-36 bg-green-500 text-white px-4 py-2 rounded"
        >
          Editar
        </button> 
           </div>
          ))}
       
      </Modal>
  )
}

