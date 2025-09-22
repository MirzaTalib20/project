import React from 'react';
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
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { locations } from '../data/locations';
import image1 from '../assest/images/home1.png'
import image2 from '../assest/images/home2.png'
// Add new imports for enhanced design


const HomePage: React.FC = () => {
  const featuredProducts = products.filter(p => p.availability === 'available').slice(0, 3);

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
              Why Choose <span className="gradient-text from-blue-600 to-teal-500">CoolRent</span>?
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
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
                  <span className="text-gray-900 font-semibold  from-blue-600 to-teal-500">
                    ₹{product.rentPrices?.daily}/day
                  </span>
                  <Link to={`/product/${product.id}`} className="btn-primary bg-gradient-to-r from-blue-600 to-teal-500">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Interactive Layered Carousel Section */}
{/* Premium Layered Carousel Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        See Our Equipment in Action
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Check out our premium cooling solutions at events, offices, and industrial setups
      </p>
    </div>

    <div className="relative w-full overflow-hidden">
      <motion.div 
        className="flex items-center gap-8 cursor-grab"
        whileTap={{ cursor: "grabbing" }}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
         {[
          "https://www.rentooze.in/proimg/PEDESTIAL FAN - 2.png",
          "https://www.rentooze.in/proimg/MIST FAN SILVER - 6.png",
          "https://www.rentooze.in/proimg/Heater - 2.png",
          "https://www.rentooze.in/proimg/MIST FAN BLACK - 1.png"
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.08, y: -10, zIndex: 20 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl`}
            style={{ zIndex: 10 - i, rotate: i % 2 === 0 ? -4 : 4 }}
          >
            <img
              src={img}
              alt={`Equipment ${i + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/0 rounded-2xl"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Left/Right Floating Shadows */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
    </div>

    {/* Animated Indicator */}
    <div className="flex justify-center mt-8 space-x-2">
      {[...Array(4)].map((_, i) => (
        <motion.div 
          key={i} 
          className="w-3 h-3 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
        />
      ))}
    </div>
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
    </div>
  );
};

export default HomePage;