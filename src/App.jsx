import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation(); 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
