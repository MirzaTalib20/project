import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Snowflake, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setVisible(false);
      } else {
        // scrolling UP or stopped
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      transition-all duration-300
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full
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
          {[
            { path: "/", label: "Home" },
            { path: "/catalog", label: "Products" },
            { path: "/about", label: "About" },
            { path: "/faq", label: "FAQ" },
            { path: "/contact", label: "Contact Us" },
          ].map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium ${
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
          bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
