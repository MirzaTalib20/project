import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="
        group
        bg-white rounded-3xl
        border border-gray-200/60
        hover:border-gray-300/70
        shadow-[0_4px_16px_rgba(0,0,0,0.04)]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        transition-all duration-300
        w-full
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-44 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="
            max-h-full object-contain
            transition-transform duration-500
            group-hover:scale-110
          "
        />
        <div className="absolute inset-0 bg-black/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="px-4 py-4 flex flex-col h-full">
        {/* Name */}
        <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {/* Rental badge */}
          <span
            className="
              inline-flex items-center
              whitespace-nowrap
              text-[11px] font-medium
              text-blue-600
              bg-blue-50/70
              px-2.5 py-1
              rounded-full
            "
          >
            Rental · Per Day
          </span>

          {/* RENT BUTTON */}
          <Link
            to={`/product/${product._id}`}
            className="
              whitespace-nowrap
              px-4 py-1.5
              rounded-full
              bg-blue-600
              text-white
              text-xs font-semibold
              transition-all duration-300
              hover:bg-blue-700
              hover:scale-105
              active:scale-95
            "
          >
            Rent
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
