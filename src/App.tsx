import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetails from './pages/CarDetails';
import About from './pages/About';
import Financing from './pages/Financing';
import Contact from './pages/Contact';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;