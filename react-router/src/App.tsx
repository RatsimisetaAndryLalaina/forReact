import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';  
import ParentComponent from './pages/ParentComponent';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  { 
    path: '/', 
    errorElement: <NotFound/>, 
    element: <ParentComponent/>,
    children: [
      { path: '/', element: <About/> },
      { path: '/contact', element: <Contact/> },
      { path: '/product', element: <Product/> , loader: () => 
        [
          { id: 1, name: "Laptop", price: 999.99 },
          { id: 2, name: "Smartphone", price: 699.99 },
          { id: 3, name: "Tablet", price: 449.99 },
          { id: 4, name: "Headphones", price: 199.99 },
        ]
      },
      { path: '/product/:id', element: <ProductDetails/> },
    ]
  }
]);

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App;
