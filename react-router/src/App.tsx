import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';  
import ParentComponent from './pages/ParentComponent';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  { 
    path: '/', 
    errorElement: <NotFound/>, 
    element: <ParentComponent/>,
    children: [
      { path: '/', element: <About/> },
      { path: '/contact', element: <Contact/> },
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
