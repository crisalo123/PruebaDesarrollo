
import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import { ProductProvider } from './contex/useContext';



function App() {

  return (
    <ProductProvider> 
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ProductProvider>
  )
}

export default App
