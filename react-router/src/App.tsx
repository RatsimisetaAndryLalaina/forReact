import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';  

const router = createBrowserRouter([
  { path: '/', element: <About/> },
  { path: '/contact', element: <Contact/> },
]);

function App() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App;
