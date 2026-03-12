import { Routes, Route, Navigate } from 'react-router-dom';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import './index.css'; // Keep index.css for global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
