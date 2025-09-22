import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    buyPrice: number;
    rentPrices: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    availability: 'available' | 'booked' | 'out_of_stock';
    category: string;
  };
  mode: 'buy' | 'rent';
}

const BuyRentProductCard: React.FC<ProductCardProps> = ({ product, mode }) => {
  const availabilityColors = {
    available: 'bg-green-100 text-green-800',
    booked: 'bg-orange-100 text-orange-800',
    out_of_stock: 'bg-red-100 text-red-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`
          absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium
          ${availabilityColors[product.availability]}
        `}>
          {product.availability.replace('_', ' ').charAt(0).toUpperCase() + 
           product.availability.slice(1).replace('_', ' ')}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

        {/* Pricing */}
        <div className="space-y-2">
          {mode === 'buy' ? (
            <div className="text-xl font-bold text-[#5682B1]">
              ₹{product.buyPrice.toLocaleString()}
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-sm text-gray-600">
                Daily: ₹{product.rentPrices.daily.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Weekly: ₹{product.rentPrices.weekly.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">
                Monthly: ₹{product.rentPrices.monthly.toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                     text-[#5682B1] border border-[#5682B1] hover:bg-[#5682B1]/5 transition-colors"
          >
            <Info className="w-4 h-4" />
            Details
          </Link>
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl 
                     bg-gradient-to-r from-[#5682B1] to-[#739EC9] text-white 
                     hover:shadow-lg transition-shadow"
            disabled={product.availability !== 'available'}
          >
            {mode === 'buy' ? (
              <>
                <ShoppingCart className="w-4 h-4" />
                Buy Now
              </>
            ) : (
              <>
                <Clock className="w-4 h-4" />
                Rent Now
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BuyRentProductCard;