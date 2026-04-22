import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';  
import ParentComponent from './pages/ParentComponent';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import ProductError from './pages/ProductError';
import { loadProduct } from './pages/Loader/loaderProduct';
import contactAction from './pages/Action/contactAction';

const router = createBrowserRouter([
  { 
    path: '/', 
    errorElement: <NotFound/>, 
    element: <ParentComponent/>,
    children: [
      { path: '/', element: <About/> },
      { path: '/contact', element: <Contact/>, action: contactAction },
      { path: '/product', element: <Product/> , loader: loadProduct, errorElement: <ProductError/>},
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
