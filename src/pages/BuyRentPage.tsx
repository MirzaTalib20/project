import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { products } from '../data/products';

type ViewMode = 'buy' | 'rent';

const BuyRentPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('rent');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filtered products based on search
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5682B1] to-[#739EC9] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 800 600"
          >
            <circle cx="200" cy="200" r="150" fill="white" fillOpacity="0.05" />
            <circle cx="600" cy="400" r="200" fill="white" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {viewMode === 'buy' ? 'Buy Equipment' : 'Rent Equipment'}
          </h1>
          <p className="text-cyan-50 max-w-2xl mx-auto text-lg sm:text-xl">
            {viewMode === 'buy'
              ? 'Purchase high-quality cooling equipment for your long-term needs'
              : 'Flexible rental options for your temporary cooling requirements'}
          </p>

          {/* View Mode Toggle */}
          <div className="mt-8 inline-flex bg-white rounded-full p-1 shadow-md">
            {(['rent', 'buy'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-8 py-2 rounded-full font-medium transition-all
                  ${viewMode === mode
                    ? 'bg-gradient-to-r from-[#5682B1] to-[#739EC9] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#5682B1]'}
                `}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5682B1] focus:border-transparent shadow-sm transition"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 hover:border-[#5682B1] shadow-sm transition-all"
          >
            <Filter className="w-5 h-5 text-gray-600" />
            Filters
          </button>
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl shadow-sm">
                {/* Placeholder for actual filters */}
                <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500">
                  Category Filter
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500">
                  Location Filter
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500">
                  Price Range
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500">
                  Availability
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyRentPage;
