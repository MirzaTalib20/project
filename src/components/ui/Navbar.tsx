import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Snowflake,
  Phone,
  Home,
  Box,
  Info,
  HelpCircle,
  Mail,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home", icon: Home },
  { path: "/catalog", label: "Products", icon: Box },
  { path: "/about", label: "About", icon: Info },
  { path: "/faq", label: "FAQ", icon: HelpCircle },
  { path: "/contact", label: "Contact", icon: Mail },
];

const Navbar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) => {

  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  /* ================= DESKTOP SIDEBAR ================= */
  return (
    <>
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="hidden md:fixed md:inset-y-0 md:left-0 md:z-50
        md:flex bg-white/70 backdrop-blur-xl border-r border-gray-200"
      >
        <div className="flex flex-col w-full h-full px-3 py-4">
          {/* Logo + Collapse */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-3 px-2">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg">
                <Snowflake className="w-5 h-5 text-white" />
              </div>

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-lg font-semibold text-gray-800"
                  >
                    CoolRentZone
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <ChevronLeft
                className={`w-5 h-5 transition-transform ${
                  collapsed ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <div key={path} className="relative group">
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl
                  transition-all duration-200
                  ${
                    isActive(path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                  </motion.div>

                  <AnimatePresence>
                    {!collapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        className="text-sm font-medium"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>

                {/* Tooltip */}
                {collapsed && (
                  <div
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2
                    px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs
                    opacity-0 group-hover:opacity-100 pointer-events-none
                    transition shadow-lg whitespace-nowrap"
                  >
                    {label}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919999999999"
            className="mt-4 flex items-center justify-center gap-2 px-3 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            {!collapsed && <span>Call Now</span>}
          </motion.a>
        </div>
      </motion.aside>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full
          bg-white/40 backdrop-blur-2xl border border-white/30
          shadow-[0_8px_32px_rgba(31,38,135,0.15)]
          w-[90vw]"
        >
          <Link to="/" className="flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">CoolRentZone</span>
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg px-4 py-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium
                ${
                  isActive(link.path)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
