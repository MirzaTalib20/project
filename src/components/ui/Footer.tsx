import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-[#0b1220] to-[#050914] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-400">
                CoolRentZone
              </span>
            </div>

            <p className="text-gray-400 text-sm max-w-xs">
              Premium cooling equipment rental for events, offices and industries.
            </p>
          </div>

          {/* LINKS */}
          <div className="space-y-6">
            {/* Desktop */}
            <div className="hidden md:block space-y-2 text-sm text-gray-300">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <Link to="/" className="block hover:text-blue-400">Home</Link>
              <Link to="/catalog" className="block hover:text-blue-400">Products</Link>
              <Link to="/about" className="block hover:text-blue-400">About</Link>
              <Link to="/faq" className="block hover:text-blue-400">FAQ</Link>
              <Link to="/booking" className="block hover:text-blue-400">Book Now</Link>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="flex w-full justify-between items-center font-semibold"
              >
                Quick Links
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="mt-3 space-y-2 text-sm text-gray-300">
                  <Link to="/" className="block">Home</Link>
                  <Link to="/catalog" className="block">Products</Link>
                  <Link to="/about" className="block">About</Link>
                  <Link to="/faq" className="block">FAQ</Link>
                  <Link to="/booking" className="block">Book Now</Link>
                </div>
              )}
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-3 text-sm text-gray-300">
            <h4 className="font-semibold text-white">Contact Us</h4>

            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-blue-400" />
              <div>
                <p>+91 9819570211</p>
                <p>+91 9819570211</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail className="w-4 h-4 text-blue-400" />
              <p>rentooze@gmail.com</p>
            </div>

            <div className="flex gap-3">
              <MapPin className="w-4 h-4 text-blue-400" />
              <p>
                Shop 3, LSBI / Multifit Road,<br />
                Wadgaon Sheri, Pune – 411014
              </p>
            </div>

            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-blue-400" />
              <p>24/7 Emergency Support</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 CoolRentZone. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span className="hover:text-blue-400 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-400 cursor-pointer">Terms</span>
            <span className="hover:text-blue-400 cursor-pointer">Refund</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
