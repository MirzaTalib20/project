import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Snowflake, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Phone
} from 'lucide-react';

import ReviewCard from '../components/ui/ReviewCard';
import { productService } from '../services/productService';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { locations } from '../data/locations';
import image1 from '../assest/images/home1.png'
import image2 from '../assest/images/home2.png'
// Add new imports for enhanced design
import { Product } from '../types';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchAll();
        
        if (response.success) {
          // Filter available products and take first 3
          const available = response.data
            .filter(p => p.availability === 'available')
            .slice(0, 3);
          setFeaturedProducts(available);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-cyan-600 via-teal-500 to-emerald-400">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                Premium Cooling
                <span className="block mt-2 bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-cyan-50 leading-relaxed max-w-xl">
                Experience industrial-grade cooling equipment rental with seamless service. Perfect for events, offices, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/catalog"
                  className="group relative px-8 py-4 bg-gradient-to-r from-white to-cyan-50 rounded-2xl font-semibold text-cyan-900 shadow-lg shadow-cyan-900/20 hover:shadow-xl hover:shadow-cyan-900/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Browse Equipment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="tel:+91-9999999999"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <img
                    src={image1}
                    alt="Premium Cooling Equipment"
                    className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="col-span-5 pt-12">
                  <img
                    src={image2}
                    alt="Professional Installation"
                    className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Cities", value: "12+" },
                    { label: "Customers", value: "2000+" },
                    { label: "Equipment", value: "500+" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-cyan-100 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#FFE8DB]/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why Choose <span className="gradient-text from-blue-600 to-teal-500">CoolRentZone</span>?
            </h2>
            <p className="text-[#000000]/70 max-w-2xl mx-auto">
              We provide reliable, efficient cooling solutions with exceptional service quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Industrial-grade equipment from top brands"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quick Setup",
                description: "Professional installation within 2 hours"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Rental",
                description: "Daily, weekly, or monthly rental options"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="mb-4 text-[#5682B1] group-hover:text-[#739EC9] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#000000] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#000000]/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="gradient-text from-blue-600 to-teal-500">Equipment</span>
            </h2>
            <p className="text-[#000000]/70 max-w-2xl mx-auto">
              Discover our most popular cooling solutions
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card group overflow-hidden"
                >
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[#FFE8DB] text-[#000000] px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-[#000000]/70 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">
                      ₹{product.rentPrices?.daily}/day
                    </span>
                    <Link 
                      to={`/product/${product._id}`} 
                      className="btn-primary bg-gradient-to-r from-blue-600 to-teal-500"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
{/* Interactive Layered Carousel Section */}
{/* Premium Equipment Showcase Carousel */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Featured Equipment Gallery
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Swipe through our premium collection of cooling solutions
      </p>
    </div>

    <motion.div 
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Carousel */}
      <motion.div 
        className="flex space-x-8 pb-12 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -1200 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {[
          {
            image: "https://www.rentooze.in/proimg/PEDESTIAL FAN - 2.png",
            title: "Pedestal Fan",
            category: "Fans"
          },
          {
            image: "https://www.rentooze.in/proimg/MIST FAN SILVER - 6.png",
            title: "Mist Fan Silver",
            category: "Mist Fans"
          },
          {
            image: "https://www.rentooze.in/proimg/PORTABLE AC - 1.png",
            title: "Portable AC",
            category: "Air Conditioners"
          },
          {
            image: "https://www.rentooze.in/proimg/MIST FAN BLACK - 1.png",
            title: "Mist Fan Black",
            category: "Mist Fans"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative min-w-[300px] sm:min-w-[350px] group"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Card Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-900">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <Link
                    to="/catalog"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-600"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Swipe Instruction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-6 text-gray-500 flex items-center justify-center gap-2"
      >
        <span>Swipe to explore</span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Locations Served */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cities We Serve</h2>
            <p className="text-gray-600">
              Reliable cooling solutions across major Indian cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {locations.filter(loc => loc.isActive).map((location) => (
              <div key={location.id} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900">{location.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Smart Choice for Cooling Solutions
              </h2>
              <div className="space-y-4">
                {[
                  "Free delivery and installation within city limits",
                  "Professionally maintained and sanitized equipment",
                  "Flexible rental periods with competitive pricing",
                  "Emergency replacement service available",
                  "No maintenance hassles during rental period",
                  "24/7 customer support and technical assistance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Service"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600">4.9/5 from 500+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Stay Cool?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your cooling equipment today and enjoy professional service with competitive rates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+91-9999999999"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>+91-9999999999</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
<motion.div
  className="fixed bottom-6 right-6 z-50 group"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
>
  <div className="whatsapp-tooltip">
    Chat with us on WhatsApp
  </div>
  <a
    href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20cooling%20equipment%20rental%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
  >
    <svg
      className="w-6 h-6 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
    </svg>
  </a>
</motion.div>
    </div>
  );
};

export default HomePage;