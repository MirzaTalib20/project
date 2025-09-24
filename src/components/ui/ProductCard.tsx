import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { IndianRupee, MapPin, CheckCircle, Clock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showDetails = true }) => {
  const isAvailable = product.availability === 'available';

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-56 md:h-64 bg-gray-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Availability Badge */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
            isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {isAvailable ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
          {isAvailable ? 'Available' : 'Booked'}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title + Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
        </div>

        {/* Rent Pricing */}
        {product.rentPrices && (
          <div className="flex items-center gap-1 mb-3 text-gray-800">
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-xl font-bold">{product.rentPrices.daily.toLocaleString()}</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
        )}

        {/* Location */}
         {product.locations && product.locations.length > 0 && (
            <div className="flex items-center space-x-1 text-gray-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                Available in {product.locations.slice(0, 2).join(', ')}
                {product.locations.length > 2 && ` +${product.locations.length - 2} more`}
              </span>
            </div>
          )}

        {/* Features */}
        

        {/* Action Button */}
        <div className="mt-auto">
          <Link
            to={`/product/${product._id}`}
            className="block w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center font-medium py-2 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
