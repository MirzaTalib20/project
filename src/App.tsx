import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import BookingPage from './pages/BookingPage';
import AboutContact from './pages/AboutContact';
import FAQ from './pages/FAQ';
import BuyRentPage from './pages/BuyRentPage';
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/buy-rent" element={<BuyRentPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;