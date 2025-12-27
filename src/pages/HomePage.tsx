import React, {
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
// OPTIMIZATION: Use LazyMotion and domAnimation to reduce initial bundle size of Framer Motion
import { LazyMotion, domAnimation, m } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { ReviewCard } from "../components/ui/ReviewCard";
import { reviews } from "../data/reviews";
import { gallery } from "../data/gallery";

import { products } from "../data/products";

// OPTIMIZATION: Dynamic imports for non-critical carousels to reduce main thread work on load
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import ContextHero from "../components/ContextHero";
const HomePage: React.FC = () => {
  // OPTIMIZATION: Memoize static data to prevent recreation on re-renders
  const features = useMemo(
    () => [
      {
        title: "Reliable & Fast Delivery",
        description:
          "Get same-day delivery on most units. We have a vast inventory across 12+ cities, ensuring you get what you need, when you need it.",
      },
      {
        title: "Premium, Vetted Equipment",
        description:
          "Every unit is professionally maintained, cleaned, and tested before delivery. We guarantee high-performance, safe, and reliable cooling.",
      },
      {
        title: "24/7 Expert Support",
        description:
          "Our team is always on standby to help with setup, operation, or any questions you have, ensuring your event or workspace runs smoothly.",
      },
    ],
    []
  );

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
  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.availability === "available").slice(0, 4);
  }, []);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  // OPTIMIZATION: Memoize city list
  const cities = useMemo(
    () => [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
    ],
    []
  );

  return (
    // OPTIMIZATION: LazyMotion wrapper with domAnimation for reduced JS execution
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen">
        {/* --- Hero Section --- */}
        <ContextHero />

        {/* --- Features Section --- */}
        <section className="py-24 bg-gradient-to-b from-[#FFE8DB]/20 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Why Choose{" "}
                <span className="gradient-text from-blue-600 to-teal-500">
                  CoolRentZone
                </span>
                ?
              </h2>
              <p className="text-[#000000]/70 max-w-2xl mx-auto">
                We provide reliable, efficient cooling solutions with
                exceptional service quality
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Snowflake className="w-8 h-8" />,
                  title: "Premium Quality",
                  description: "Industrial-grade equipment from top brands",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Quick Setup",
                  description: "Professional installation within 2 hours",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "24/7 Support",
                  description: "Round-the-clock technical assistance",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Flexible Rental",
                  description: "Daily, weekly, or monthly rental options",
                },
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
                  <div className="mb-4 text-[#5682B1] group-hover:text-[#739EC9] transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#000000]/70">{feature.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Featured Products --- */}
      {/* --- Featured Products (Recommendation Style) --- */}
<section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex items-center justify-between mb-6 md:mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
        Explore our recommendations
      </h2>

      <Link
        to="/catalog"
        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
      >
        View all →
      </Link>
    </div>

    {/* GRID (NO SCROLL) */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {featuredProducts.map((product) => (
        <div
          key={product._id}
          className="
            bg-gray-50
            rounded-2xl
            border border-gray-200/60
            hover:shadow-lg
            transition-all duration-300
            flex flex-col
          "
        >
          {/* Image */}
          <div className="relative h-36 sm:h-40 flex items-center justify-center bg-white rounded-t-2xl">
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="h-full object-contain p-4"
            />

            {/* Category */}
            <span className="absolute top-2 right-2 text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
              {product.category}
            </span>
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
              {product.name}
            </h3>

            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-3 text-gray-900 font-bold text-sm">
              ₹{product.rentPrices?.daily}
              <span className="text-xs font-normal text-gray-500"> / day</span>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <Link
                to={`/product/${product._id}`}
                className="
                  flex-1 text-xs font-semibold
                  bg-blue-600 text-white
                  py-2 rounded-full
                  text-center
                  hover:bg-blue-700
                  transition
                "
              >
                Rent
              </Link>

              <Link
                to={`/product/${product._id}`}
                className="
                  flex-1 text-xs font-medium
                  border border-gray-300
                  py-2 rounded-full
                  text-center
                  text-gray-700
                  hover:bg-gray-100
                  transition
                "
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* --- Gallery Section --- */}
        <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  Equipment{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Gallery
                  </span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Explore our premium cooling equipment lineup.
                </p>
              </div>
              <div className="hidden md:flex gap-3 mt-4 md:mt-0">
                <button
                  onClick={scrollPrev}
                  className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
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
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          loading="lazy"
                          width={200}
                          height={180}
                          className="w-auto max-w-[85%] h-auto max-h-full object-contain"
                        />
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 px-2.5 py-0.5 rounded-full text-[11px] font-medium shadow-sm">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 leading-snug">
                          {item.category}
                        </p>
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
            <img
              src="/assets/india-map-outline.png"
              alt="India map outline"
              width={800}
              height={600}
              className="w-[800px] h-auto object-contain blur-[2px] select-none pointer-events-none"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Cities{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                We Serve
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Reliable industrial cooling solutions available across India’s
              leading cities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-16">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-sm text-gray-800 font-medium hover:bg-blue-50 transition-all duration-300"
                >
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
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                  The Smart Choice for
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                    Cooling Solutions
                  </span>
                </h2>
                <ul className="space-y-6 mb-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/catalog"
                  className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 hover:text-blue-700 group"
                >
                  Explore our full range of products
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src="/assets/images/PORTABLE AC - 1.webp"
                  alt="Man installing an industrial cooling unit"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                />
              </m.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What Our Customers Say?
            </h2>

            {/* Rating Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border rounded-lg px-4 py-3">
              <div className="flex items-center flex-wrap gap-3">
                <span className="font-semibold">Excellent</span>

                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <span className="font-medium">4.9</span>

                <span className="text-sm text-gray-500">
                  Based on <span className="font-medium">103 reviews</span>
                </span>

                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  className="h-5"
                  alt="Google"
                />
              </div>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
                Write a review
              </button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {reviews.slice(0, 8).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* --- WhatsApp Float Button --- */}
        {/* OPTIMIZATION: Conditionality ensures this non-critical UI doesn't interfere with initial hydration/paint */}
        
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
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
              </svg>
            </a>
          </m.div>
        
      </div>
    </LazyMotion>
  );
};

export default HomePage;
