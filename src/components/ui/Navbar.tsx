import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Snowflake, Phone } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/catalog", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact Us" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const isActive = (path: string) => location.pathname === path;

  /* ---------------- Scroll Hide / Show Logic ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // IMPORTANT: don't hide while mobile menu is open

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling DOWN
        setVisible(false);
      } else {
        // scrolling UP or stopped
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  /* ---------------- Close Mobile Menu on Route Change ---------------- */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      transition-all duration-300
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* ---------------- Main Navbar ---------------- */}
      <div
        className="flex items-center justify-between px-6 py-3 rounded-full
        bg-white/40 backdrop-blur-2xl border border-white/30
        shadow-[0_8px_32px_rgba(31,38,135,0.15)]
        max-w-5xl w-[90vw]"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-blue-600 to-teal-400 p-2 rounded-lg">
            <Snowflake className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-gray-800">
            CoolRentZone
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
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

        {/* Call Button (Desktop) */}
        <a
          href="tel:+919999999999"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-gradient-to-r from-blue-600 to-teal-500
          text-white text-sm font-medium shadow-sm hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="md:hidden p-2 rounded-md text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      {isOpen && (
        <div
          className="md:hidden mt-3 bg-white/80 backdrop-blur-xl
          rounded-2xl shadow-lg border border-white/40
          px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2"
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-lg text-sm font-medium
              ${
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
            className="flex items-center justify-center gap-2 mt-3
            rounded-full bg-gradient-to-r from-blue-600 to-teal-500
            text-white py-2 text-sm font-medium"
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
