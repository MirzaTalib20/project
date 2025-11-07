import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Snowflake, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg">
                <Snowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                CoolRentZone
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Premium cooling equipment rental service. Keeping you comfortable with reliable, 
              efficient cooling solutions for events, offices, and industrial applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-blue-400 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Portable ACs</span></li>
              <li><span className="text-gray-300">Mist Fans</span></li>
              <li><span className="text-gray-300">Industrial Coolers</span></li>
              <li><span className="text-gray-300">Tower ACs</span></li>
              <li><span className="text-gray-300">Spot Coolers</span></li>
            </ul>
          </div>

          {/* Contact Info */}
           <div className="space-y-6">
      {/* Section Title */}
      <h3 className="text-lg font-semibold text-gray-100 tracking-tight">
        Contact Us
      </h3>

      {/* Contact List */}
      <ul className="space-y-5 text-sm">
        {/* Phone */}
        <li className="flex items-start space-x-3">
          <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-gray-300 font-medium">+91 9819570211</p>
            <p className="text-gray-300 font-medium">+91 9819570211</p>
          </div>
        </li>

        {/* Email */}
        <li className="flex items-start space-x-3">
          <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <p className="text-gray-300 font-medium">rentooze@gmail.com</p>
        </li>

        {/* Address */}
        <li className="flex items-start space-x-3">
          <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <p className="text-gray-300 leading-relaxed">
            Shop Number 3, LSBI/ Multifit Road, Near Niyati Enchante, New Kalyani Nagar,
            Digambar Nagar, Wadgaon Sheri, Pune - 411014
          </p>
        </li>

        {/* Support Hours */}
        <li className="flex items-start space-x-3">
          <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-gray-300 font-medium">24/7 Support</p>
            <p className="text-gray-400 text-xs">Emergency Service Available</p>
          </div>
        </li>
      </ul>
    </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CoolRent. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;