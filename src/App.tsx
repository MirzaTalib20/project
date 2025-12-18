import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

// ✅ Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductCatalog = lazy(() => import("./pages/ProductCatalog"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const AboutContact = lazy(() => import("./pages/AboutContact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BuyRentPage = lazy(() => import("./pages/BuyRentPage"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      {/* ✅ Suspense is REQUIRED for lazy routes */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <span className="text-gray-500 text-sm">Loading…</span>
          </div>
        }
      >
        <main className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<AboutContact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/buy-rent" element={<BuyRentPage />} />
            <Route path="/contact" element={<AboutContact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
