import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight, Clock, Shield, Star, Truck } from "lucide-react";
import { products } from "../data/products";
import { Product } from "../types";

const AUTO_SCROLL_DELAY = 3000; // 3 seconds

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p._id === id) as Product | undefined;

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const images = useMemo(
    () => [...product.images].sort((a, b) => a.localeCompare(b)),
    [product.images]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 🔁 Auto scroll logic
  useEffect(() => {
    if (images.length <= 1) return;

    intervalRef.current = window.setInterval(() => {
      if (!isHovered.current) {
        nextImage();
      }
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= CAROUSEL ================= */}
          <div
            className="space-y-4"
            onMouseEnter={() => (isHovered.current = true)}
            onMouseLeave={() => (isHovered.current = false)}
          >
            <div className="relative group">
              <img
                src={images[currentIndex]}
                alt={product.name}
                className="w-full h-[420px] object-contain bg-gray-50 rounded-2xl"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2
                               bg-black/60 text-white p-2 rounded-full
                               opacity-0 group-hover:opacity-100 transition"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               bg-black/60 text-white p-2 rounded-full
                               opacity-0 group-hover:opacity-100 transition"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border
                      ${i === currentIndex
                        ? "border-blue-600"
                        : "border-gray-200 opacity-70 hover:opacity-100"}
                    `}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= PRODUCT INFO ================= */}
         <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  {product.category}
                </p>
                <h1 className="text-4xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Rating (static for now) */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-500">(4.8)</span>
              </div>

            

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Truck className="w-5 h-5 text-blue-600" />
                  Free Delivery
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Quality Checked
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-blue-600" />
                  Ready to Use
                </div>
              </div>

              {/* Specifications */}
              {product.specifications && (
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key}>
                          <p className="text-gray-500">{key}</p>
                          <p className="font-medium text-gray-900">
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
  href="tel:+917666911159"
  className="mt-6 w-full py-4 rounded-xl text-white font-semibold
             bg-gradient-to-r from-blue-600 to-teal-500
             hover:shadow-lg transition
             flex items-center justify-center"
>
  Call Now · 76669 11159
</a>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
