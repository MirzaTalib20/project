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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-300"
        />

        {/* Availability Badge */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${
            isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {isAvailable ? (
            <>
              <CheckCircle className="w-3 h-3" />
              <span>Available</span>
            </>
          ) : (
            <>
              <Clock className="w-3 h-3" />
              <span>Booked</span>
            </>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Pricing */}
          {product.rentPrices && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <IndianRupee className="w-4 h-4 text-gray-900" />
                <span className="text-2xl font-bold text-gray-900">
                  {product.rentPrices.daily.toLocaleString()}
                </span>
                <span className="text-gray-900 text-sm">/day</span>
              </div>
              <div className="text-right text-sm text-gray-900">
                <p>Weekly: ₹{product.rentPrices.weekly.toLocaleString()}</p>
                <p>Monthly: ₹{product.rentPrices.monthly.toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* Locations */}
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
          {showDetails && product.features && product.features.length > 0 && (
            <ul className="space-y-1 mb-4">
              {product.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 px-4 rounded-lg font-medium text-center hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
