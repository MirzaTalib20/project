import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Calendar, Check, Truck, Shield, 
  Clock, Star, ChevronLeft, ChevronRight, Info 
} from 'lucide-react';
import { products } from '../data/products';
import { Product, RentDuration } from '../types';

type PurchaseMode = 'buy' | 'rent';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [mode, setMode] = useState<PurchaseMode>('rent');
  const [rentDuration, setRentDuration] = useState<RentDuration>('daily');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSpecifications, setShowSpecifications] = useState(false);

  const product = products.find(p => p.id === id) as Product | undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Product not found</div>
      </div>
    );
  }

  const getRentPrice = (duration: RentDuration) => {
  return product.rentPrices ? product.rentPrices[duration] : 0;
};

  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Image Gallery Section */}
            <motion.div
              className="lg:w-1/2 p-6 space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative group">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                 bg-blue-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 
                                 transition-opacity hover:bg-blue-700"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                 bg-blue-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 
                                 transition-opacity hover:bg-blue-700"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden
                        ${currentImageIndex === index ? 'ring-2 ring-[#5682B1]' : 'opacity-70'}
                      `}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="lg:w-1/2 p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Category & Availability Badge */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#5682B1]">
                  {product.category}
                </span>
                <span className={`
                  px-3 py-1 rounded-full text-sm font-medium
                  ${product.availability === 'available' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'}
                `}>
                  {product.availability.charAt(0).toUpperCase() + product.availability.slice(1)}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Ratings */}
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-gray-500 text-sm">(4.8 / 5)</span>
              </div>

              {/* Purchase Options */}
              <div className="space-y-6 py-6 border-y border-gray-100">
                {/* Mode Toggle */}
                <div className="flex gap-4 p-1 bg-gray-100 rounded-xl w-fit">
                  {(['rent', 'buy'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => setMode(option)}
                      className={`
                        px-6 py-2 rounded-lg font-medium transition-all
                        ${mode === option 
                          ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700' 
                          : 'text-gray-600 hover:bg-blue-50'}
                      `}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Pricing Section */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    {mode === 'buy' ? (
                      <div className="space-y-4">
                        <div className="text-3xl font-bold text-[#5682B1]">₹{product.buyPrice?.toLocaleString()}</div>
                        <button 
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 
                                     bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl 
                                     font-semibold shadow-md hover:shadow-lg 
                                     transform transition-all duration-200 
                                     hover:-translate-y-0.5"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          Buy Now
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {/* Rent Durations */}
                        <div className="grid grid-cols-3 gap-4">
                          {(Object.keys(product.rentPrices || {}) as RentDuration[]).map((duration) => (
                            <button
                              key={duration}
                              onClick={() => setRentDuration(duration)}
                              className={`p-4 rounded-2xl border text-center transition-all
                                ${rentDuration === duration
                                  ? 'bg-gradient-to-r from-[#5682B1]/20 to-[#739EC9]/20 border-[#5682B1] shadow-md'
                                  : 'border-gray-200 hover:border-[#5682B1]'
                                }`}
                            >
                              <div className="text-sm text-gray-600 capitalize">{duration}</div>
                              <div className="text-lg font-bold text-[#5682B1]">
                                ₹{getRentPrice(duration).toLocaleString()}
                              </div>
                            </button>
                          ))}
                        </div>
                        <button 
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 
                                     text-white rounded-xl 
                                     font-semibold shadow-md hover:shadow-lg 
                                     transform transition-all duration-200 
                                     hover:-translate-y-0.5 bg-gradient-to-r from-blue-600 to-teal-500" 
                        >
                          <Calendar className="w-5 h-5" />
                          Rent Now
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Specifications Toggle */}
              <button
                onClick={() => setShowSpecifications(!showSpecifications)}
                className="flex items-center justify-between w-full py-2 text-left 
                           hover:text-blue-600 transition-colors"
              >
                <span className="font-medium">Specifications</span>
                <Info className={`w-5 h-5 transition-transform 
                  ${showSpecifications ? 'rotate-180 text-blue-600' : ''}`} 
                />
              </button>

              {/* Specifications Content */}
              <AnimatePresence>
                {showSpecifications && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {Object.entries(product.specifications || {}).map(([key, value]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-500">{key}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Truck className="w-5 h-5 text-[#5682B1]" />, text: "Free Delivery" },
                  { icon: <Shield className="w-5 h-5 text-[#5682B1]" />, text: "Service Warranty" },
                  { icon: <Clock className="w-5 h-5 text-[#5682B1]" />, text: "24/7 Support" },
                  { icon: <Check className="w-5 h-5 text-[#5682B1]" />, text: "Quality Assured" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    {feature.icon}
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
