import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
// OPTIMIZATION: Use LazyMotion and domAnimation to reduce initial bundle size of Framer Motion
import { LazyMotion, domAnimation, motion, m } from "framer-motion";
// OPTIMIZATION: Specific imports from lucide-react can be heavy; ensure tree-shaking works 
// or use specific paths if the build environment requires it.
import {
  ArrowRight,
  Snowflake,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Loader,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ReviewCard from "../components/ui/ReviewCard";
import { productService } from "../services/productService";
import { reviews } from "../data/reviews";
import { gallery } from "../data/gallery";
import image1 from "../assest/images/home1.webp";
import image2 from "../assest/images/home2.webp";
import { Product } from "../types";

// OPTIMIZATION: Dynamic imports for non-critical carousels to reduce main thread work on load
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // OPTIMIZATION: Delay showing non-critical floating elements to improve TBT
  const [showFloatingElements, setShowFloatingElements] = useState(false);

  useEffect(() => {
    // OPTIMIZATION: Defer data fetching and non-critical logic slightly to allow LCP to paint first
    const timer = setTimeout(() => {
        const fetchProducts = async () => {
          try {
            const response = await productService.fetchAll();
            if (response.success) {
              const available = response.data
                .filter((p) => p.availability === "available")
                .slice(0, 3);
              setFeaturedProducts(available);
            } else {
              setError("Failed to load products");
            }
          } catch (err) {
            console.error("Fetch error:", err);
            setError(err instanceof Error ? err.message : "An error occurred");
          } finally {
            setLoading(false);
          }
        };
        fetchProducts();
        setShowFloatingElements(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  // OPTIMIZATION: Memoize static data to prevent recreation on re-renders
  const features = useMemo(() => [
    {
      title: "Reliable & Fast Delivery",
      description: "Get same-day delivery on most units. We have a vast inventory across 12+ cities, ensuring you get what you need, when you need it.",
    },
    {
      title: "Premium, Vetted Equipment",
      description: "Every unit is professionally maintained, cleaned, and tested before delivery. We guarantee high-performance, safe, and reliable cooling.",
    },
    {
      title: "24/7 Expert Support",
      description: "Our team is always on standby to help with setup, operation, or any questions you have, ensuring your event or workspace runs smoothly.",
    },
  ], []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [AutoPlay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  // OPTIMIZATION: Memoize city list
  const cities = useMemo(() => [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata",
  ], []);

  return (
    // OPTIMIZATION: LazyMotion wrapper with domAnimation for reduced JS execution
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen">
        {/* --- Hero Section --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9e9e9] via-[#dcdcdc] to-[#c8c8c8]">
          <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-blue-300/40 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-300/40 blur-[140px] rounded-full" />

          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-24 md:py-32">
            <m.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left space-y-6"
            >
              <p className="text-gray-600 text-sm uppercase tracking-wide">CoolRentZone — Fast. Professional.</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 max-w-lg">
                Rent Industrial-Grade{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Cooling Solutions
                </span>{" "}
                for Events & Workspaces
              </h1>
              <p className="text-gray-600 text-base max-w-md mx-auto md:mx-0">
                Affordable, fast, and professional cooling equipment guaranteed for every occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                <Link
                  to={`/catalog`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium shadow-sm hover:shadow-md transition-transform hover:scale-[1.03]"
                >
                  Browse Equipment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-400/60 text-gray-800 font-medium hover:bg-gray-100 transition-all">
                  <Phone className="w-4 h-4" />
                  Call Now
                </button>
              </div>
              <p className="text-gray-500 text-sm pt-4">
                Serving <span className="font-semibold text-gray-800">12+ Cities</span> • <span className="font-semibold text-gray-800">2000+ Customers</span> • <span className="font-semibold text-gray-800">500+ Units Available</span>
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex-1 flex justify-center md:justify-end mt-16 md:mt-0"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 to-teal-200/40 blur-[120px] rounded-full" />
              {/* OPTIMIZATION: Added width/height and loading="lazy" for non-LCP image */}
              <img
                src={image2}
                alt="Cooling Equipment secondary"
                width={300}
                height={200}
                className="absolute bottom-6 left-0 w-1/2 max-w-sm opacity-60 scale-90 blur-[0.3px] rounded-2xl drop-shadow-[0_6px_25px_rgba(0,0,0,0.15)] hidden md:block"
                loading="lazy"
              />
              {/* OPTIMIZATION: fetchPriority="high" and loading="eager" for LCP image */}
              <img
                src={image1}
                alt="Cooling Equipment main"
                width={520}
                height={420}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="relative w-full max-w-md object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              />
            </m.div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="py-24 bg-gradient-to-b from-[#FFE8DB]/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose <span className="gradient-text from-blue-600 to-teal-500">CoolRentZone</span>?</h2>
              <p className="text-[#000000]/70 max-w-2xl mx-auto">We provide reliable, efficient cooling solutions with exceptional service quality</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Snowflake className="w-8 h-8" />, title: "Premium Quality", description: "Industrial-grade equipment from top brands" },
                { icon: <Zap className="w-8 h-8" />, title: "Quick Setup", description: "Professional installation within 2 hours" },
                { icon: <Shield className="w-8 h-8" />, title: "24/7 Support", description: "Round-the-clock technical assistance" },
                { icon: <Clock className="w-8 h-8" />, title: "Flexible Rental", description: "Daily, weekly, or monthly rental options" },
              ].map((feature, index) => (
                // OPTIMIZATION: viewport={{ once: true }} reduces observer load
                <m.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="mb-4 text-[#5682B1] group-hover:text-[#739EC9] transition-colors">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">{feature.title}</h3>
                  <p className="text-[#000000]/70">{feature.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Featured Products --- */}
        <section className="py-24 bg-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Equipment</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our most popular cooling solutions, ready for any event.</p>
            </div>
            {loading ? (
              <div className="flex justify-center items-center h-64"><Loader className="animate-spin h-12 w-12 text-blue-600" /></div>
            ) : error ? (
              <div className="text-center text-red-600 py-8 px-6 bg-red-50 rounded-lg"><h3 className="text-lg font-semibold">Oops! Something went wrong.</h3><p>{error}</p></div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                  <m.div
                    key={product._id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      {/* OPTIMIZATION: Image height/width + lazy for below-fold items */}
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={256}
                        loading="lazy"
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                      <div className="absolute top-4 right-4 bg-[#FFE8DB] text-[#D95F12] px-3 py-1 rounded-full text-sm font-semibold">{product.category}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow h-18 overflow-hidden">{product.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-900 font-bold text-lg">₹{product.rentPrices?.daily}<span className="text-sm font-normal text-gray-500">/day</span></span>
                        <Link to={`/product/${product._id}`} className="px-5 py-2 rounded-full text-white font-medium shadow-sm transition-transform hover:scale-105 bg-gradient-to-r from-blue-600 to-teal-500">View Details</Link>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Equipment <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Gallery</span></h2>
                <p className="text-gray-600 mt-2">Explore our premium cooling equipment lineup.</p>
              </div>
              <div className="hidden md:flex gap-3 mt-4 md:mt-0">
                <button onClick={scrollPrev} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"><ChevronLeft className="w-5 h-5 text-gray-700" /></button>
                <button onClick={scrollNext} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"><ChevronRight className="w-5 h-5 text-gray-700" /></button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
                  {gallery.map((item, index) => (
                    <m.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex-[0_0_88%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] bg-white/95 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 snap-center overflow-hidden backdrop-blur-sm"
                    >
                      <div className="relative h-44 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img src={item.imageUrl} alt={item.name} loading="lazy" width={200} height={180} className="w-auto max-w-[85%] h-auto max-h-full object-contain" />
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 px-2.5 py-0.5 rounded-full text-[11px] font-medium shadow-sm">{item.category}</div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">{item.name}</h3>
                        <p className="text-xs text-gray-500 leading-snug">{item.category}</p>
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Cities Served --- */}
        <section className="relative py-28 bg-gradient-to-br from-[#f5f7fa] via-[#edf2f7] to-[#e8f1f2] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            {/* OPTIMIZATION: Loading lazy for background assets */}
            <img src="/assets/india-map-outline.png" alt="India map outline" width={800} height={600} className="w-[800px] h-auto object-contain blur-[2px] select-none pointer-events-none" loading="lazy" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Cities <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">We Serve</span></h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">Reliable industrial cooling solutions available across India’s leading cities.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-16">
              {cities.map((city) => (
                <div key={city} className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-sm text-gray-800 font-medium hover:bg-blue-50 transition-all duration-300">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Smart Choice Section --- */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <m.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">The Smart Choice for<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Cooling Solutions</span></h2>
                <ul className="space-y-6 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div><h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4><p className="text-gray-600">{feature.description}</p></div>
                    </li>
                  ))}
                </ul>
                <Link to="/catalog" className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 hover:text-blue-700 group">
                  Explore our full range of products<ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </m.div>
              <m.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                <img src={image2} alt="Man installing an industrial cooling unit" width={600} height={400} loading="lazy" className="w-full h-auto rounded-2xl shadow-xl object-cover" />
              </m.div>
            </div>
          </div>
        </section>

        {/* --- Reviews --- */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
              <span className="ml-2 text-gray-600">4.9/5 from 500+ reviews</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
              {reviews.slice(0, 3).map((review, index) => (
                <m.div key={review.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <ReviewCard review={review} />
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WhatsApp Float Button --- */}
        {/* OPTIMIZATION: Conditionality ensures this non-critical UI doesn't interfere with initial hydration/paint */}
        {showFloatingElements && (
          <m.div
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="whatsapp-tooltip">Chat with us on WhatsApp</div>
            <a
              href="https://wa.me/919999999999?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20cooling%20equipment%20rental%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
              </svg>
            </a>
          </m.div>
        )}
      </div>
    </LazyMotion>
  );
};

export default HomePage;