import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Snowflake,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Instagram,
  Facebook,
  MessageCircleIcon
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

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/+917666911159"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition"
              >
                  <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
            </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition"
              >
                <Instagram className="w-5 h-5 text-white-400 " />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition"
              >
                <Facebook className="w-5 h-5 text-white-400" />
              </a>

              <a
                href="https://maps.google.com/?q=Wadgaon+Sheri+Pune"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition"
              >
                <MapPin className="w-5 h-5 text-white-400" />
              </a>
            </div>
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
              <p>+91 76669 11159</p>
            </div>

            <div className="flex gap-3">
              <Mail className="w-4 h-4 text-blue-400" />
              <p>coolrentzone@gmail.com</p>
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
