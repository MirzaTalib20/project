import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";

/* ================= ICON IMPORTS ================= */

import aircoolerIcon from "../assets/icons/aircooler.png";
import electricheaterIcon from "../assets/icons/electricheater.png";
import jumboFanIcon from "../assets/icons/jumbo-fan.jpg";
import mistfanIcon from "../assets/icons/mistfan.png";
import mistfanpartsIcon from "../assets/icons/mistfanparts.png";
import pedestalfanIcon from "../assets/icons/pedestalfan.png";
import portableacIcon from "../assets/icons/portableac.png";
import toweracIcon from "../assets/icons/towerac.png";

/* ================= CATEGORY NORMALIZATION ================= */
/**
 * Your product data uses HUMAN labels
 * Your UI/icons need STABLE SLUGS
 * This map is the bridge (do NOT skip this)
 */
const CATEGORY_SLUGS: Record<string, string> = {
  "Air Cooler": "aircooler",
  "Electric Heater": "electricheater",
  "Jumbo Fan": "jumbo-fan",
  "Mist Fan": "mistfan",
  "Mist Fan Parts": "mistfanparts",
  "Pedestal Fan": "pedestalfan",
  "Portable AC": "portableac",
  "Tower AC": "towerac",
};

/* ================= ICON MAP (SLUG → ICON) ================= */

const CATEGORY_ICONS: Record<string, string> = {
  aircooler: aircoolerIcon,
  electricheater: electricheaterIcon,
  "jumbo-fan": jumboFanIcon,
  mistfan: mistfanIcon,
  mistfanparts: mistfanpartsIcon,
  pedestalfan: pedestalfanIcon,
  portableac: portableacIcon,
  towerac: toweracIcon,
};

/* ================= LABEL MAP (SLUG → LABEL) ================= */

const CATEGORY_LABELS: Record<string, string> = {
  aircooler: "Cooler",
  electricheater: "Heater",
  "jumbo-fan": "Jumbo",
  mistfan: "Mist Fan",
  mistfanparts: "Mist Parts",
  pedestalfan: "Pedestal",
  portableac: "Portable AC",
  towerac: "Tower AC",
};

const ProductCatalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string>("");

  /* ================= CATEGORY SCROLL ================= */
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -160, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 160, behavior: "smooth" });
  };

  /* ================= SAFE CATEGORY LIST ================= */
  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((p) => CATEGORY_SLUGS[p.category])
          .filter(Boolean)
      ),
    ];
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const productSlug = CATEGORY_SLUGS[product.category];
      const matchesCategory =
        !activeCategory || productSlug === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <header className="mt-16 md:mt-20 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Equipment Catalog
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Browse professional cooling equipment and filter by category.
          </p>
        </header>

        {/* ================= SEARCH ================= */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search equipment..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {(searchTerm || activeCategory) && (
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("");
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm text-gray-600 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {/* ================= CATEGORY FILTER ================= */}
        <section className="mb-8 relative">
          {/* LEFT ARROW — MOBILE ONLY */}
          <button
            onClick={scrollLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-10 md:px-0 scrollbar-hide"
          >
            {categories.map((slug) => {
              const active = slug === activeCategory;
              const icon = CATEGORY_ICONS[slug];

              return (
                <button
                  key={slug}
                  onClick={() =>
                    setActiveCategory(active ? "" : slug)
                  }
                  className="flex flex-col items-center gap-1 min-w-[64px]"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all
                      ${
                        active
                          ? "bg-blue-600 shadow-md scale-105"
                          : "bg-white shadow-sm"
                      }`}
                  >
                    <img
                      src={icon}
                      alt={CATEGORY_LABELS[slug]}
                      className="w-6 h-6 object-contain"
                    />
                  </div>

                  <span
                    className={`text-[10px] font-medium ${
                      active ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {CATEGORY_LABELS[slug]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT ARROW — MOBILE ONLY */}
          <button
            onClick={scrollRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </section>

        {/* ================= PRODUCT GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-14 text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
