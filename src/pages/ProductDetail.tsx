import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Info,
  Truck,
  Shield,
  Clock,
  Check,
  Calendar,
} from "lucide-react";

import { products } from "../data/products";
import { Product } from "../types";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product: Product | undefined = products.find(
    (p) => p._id === id
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Product not found</p>
      </div>
    );
  }

  const nextImage = () =>
    setCurrentImageIndex((i) =>
      i === product.images.length - 1 ? 0 : i + 1
    );

  const prevImage = () =>
    setCurrentImageIndex((i) =>
      i === 0 ? product.images.length - 1 : i - 1
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ================= IMAGE SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6"
            >
              <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border ${
                        i === currentImageIndex
                          ? "ring-2 ring-blue-600"
                          : "opacity-70"
                      }`}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* ================= INFO SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 space-y-6"
            >
              {/* Category + Availability */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-600">
                  {product.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.availability === "available"
                    ? "Available for Rent"
                    : "Currently Unavailable"}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Trust Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  Trusted by 500+ customers
                </span>
              </div>

              {/* ================= RENT CTA CARD ================= */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 space-y-4 border">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Rent this equipment
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Flexible rental duration · Fast delivery · Professional setup
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate(`/booking?product=${product._id}`)
                  }
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:scale-[1.01] transition"
                >
                  <Calendar className="inline w-5 h-5 mr-2" />
                  Request Rental
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Our team will confirm availability & pricing
                </p>
              </div>

              {/* ================= SPECIFICATIONS ================= */}
              {product.specifications && (
                <div className="border rounded-xl p-4">
                  <button
                    onClick={() => setShowSpecs(!showSpecs)}
                    className="flex w-full justify-between items-center font-medium"
                  >
                    Specifications
                    <Info
                      className={`w-4 h-4 transition ${
                        showSpecs ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {showSpecs && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                          {Object.entries(
                            product.specifications
                          ).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-gray-500">{key}</p>
                              <p className="font-medium">{value}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* ================= BENEFITS ================= */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { icon: <Truck className="w-5 h-5" />, text: "Free Delivery" },
                  { icon: <Shield className="w-5 h-5" />, text: "Maintained Units" },
                  { icon: <Clock className="w-5 h-5" />, text: "24/7 Support" },
                  { icon: <Check className="w-5 h-5" />, text: "Quality Assured" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    {f.icon}
                    {f.text}
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
