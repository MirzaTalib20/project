import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import AppLoader from "./components/ui/AppLoader";

// Lazy pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductCatalog = lazy(() => import("./pages/ProductCatalog"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const AboutContact = lazy(() => import("./pages/AboutContact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BuyRentPage = lazy(() => import("./pages/BuyRentPage"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [appLoading, setAppLoading] = useState(true);

  // ✅ First-load-only loader
  useEffect(() => {
    const loaded = sessionStorage.getItem("app-loaded");

    if (loaded) {
      setAppLoading(false);
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("app-loaded", "true");
        setAppLoading(false);
      }, 1200); // smooth, premium timing

      return () => clearTimeout(timer);
    }
  }, []);

  if (appLoading) return <AppLoader />;

  return (
    <Router>
      <ScrollToTop />

      <Navbar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <span className="text-gray-500 text-sm">Loading page…</span>
          </div>
        }
      >
        <main
          className={`
            transition-[margin] duration-300 ease-in-out
            ${sidebarCollapsed ? "md:ml-[72px]" : "md:ml-[260px]"}
          `}
        >
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
            <Footer />
        </main>

        {/* Footer OUTSIDE main */}
      
      </Suspense>
    </Router>
  );
}
export default App;
