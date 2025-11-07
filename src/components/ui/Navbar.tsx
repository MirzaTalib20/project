import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Snowflake, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Add subtle shadow/blur on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "scale-100 " : "scale-100"
      }`}
    >
      <div
        className="flex items-center justify-between px-6 py-3 rounded-full
        bg-white/40 backdrop-blur-2xl border border-white/30
        shadow-[0_8px_32px_rgba(31,38,135,0.15)]
        max-w-5xl w-[90vw] mx-auto transition-all duration-300"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-blue-600 to-teal-400 p-2 rounded-lg shadow-sm">
            <Snowflake className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-800">
            CoolRentZone
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Call Button */}
        <a
          href="tel:+919999999999"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive(link.path)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-2 mt-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
