import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";

const heroContexts = [
  { image: "/assets/home/banner-1.webp", label: "Events & Venues" },
  { image: "/assets/home/banner-4.webp", label: "Outdoor Events" },
  { image: "/assets/home/newbanner-1.webp", label: "Indoor Setup" },
  { image: "/assets/home/newbanner-2.webp", label: "Home & Bedroom" },
  { image: "/assets/home/newbanner-3.webp", label: "Dining Area" },
  { image: "/assets/home/newbanner-4.webp", label: "Night Events" },
];

const CITY = "Pune";
const SWIPE_THRESHOLD = 120; // slows accidental slide on mobile

const ContextHero = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ================= RESPONSIVE ================= */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const visibleCards = isMobile ? 1 : isTablet ? 2 : 4;
  const maxIndex = heroContexts.length - visibleCards;
  const totalDots = maxIndex + 1;

  /* ================= AUTOPLAY ================= */
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [maxIndex]);

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    if (!query.trim()) return;
    navigate(`/catalog?search=${encodeURIComponent(query)}`);
  };

  /* ================= SWIPE ================= */
  const handleDragEnd = (_: any, info: any) => {
    if (!isMobile) return;

    if (info.offset.x < -SWIPE_THRESHOLD) {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      setIndex((i) => (i <= 0 ? maxIndex : i - 1));
    }
  };

  return (
    <section className="pt-24 pb-16  from-[#e9e9e9] via-[#dcdcdc] to-[#c8c8c8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= CAROUSEL ================= */}
        <div
          className="relative mb-6"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div className="overflow-hidden">
            <m.div
              className="flex"
              drag={isMobile ? "x" : false}
              dragDirectionLock
              dragMomentum={false}
              dragElastic={0}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${index * (100 / visibleCards)}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                width: `${(heroContexts.length / visibleCards) * 100}%`,
                touchAction: "pan-y",
              }}
            >
              {heroContexts.map((item, i) => (
              <div
  key={i}
  className={`
    flex-shrink-0 px-3
    ${visibleCards === 1 ? "w-full" : ""}
    ${visibleCards === 2 ? "w-1/2" : ""}
    ${visibleCards === 4 ? "w-1/4" : ""}
  `}
>
  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video max-h-[210px] ml-4">
    <img
      src={item.image}
      alt={item.label}
      loading="lazy"
      decoding="async"
      className="w-full h-[180px] sm:h-[200px] md:h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
    <div className="absolute bottom-4 left-4 bg-black/55 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-medium">
      {item.label}
    </div>
  </div>
</div>

              ))}
            </m.div>
          </div>

          {/* ================= DOTS ================= */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`
                  h-2.5 rounded-full transition-all
                  ${i === index ? "w-6 bg-orange-500" : "w-2.5 bg-gray-400"}
                `}
              />
            ))}
          </div>
        </div>

        {/* ================= BRAND + SEARCH ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <p className="text-orange-600 font-semibold mb-2">
              CoolRentZone {CITY}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 max-w-xl leading-tight">
              Smart Cooling Rentals for Every Space
            </h1>
            <p className="text-gray-700 mt-3 max-w-md">
              Premium cooling equipment for homes, events, offices, and large
              venues — delivered fast across {CITY}.
            </p>
          </div>

          <div className="w-full max-w-xl">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                type="text"
                placeholder="Search air coolers, chillers, blowers..."
                className="w-full h-14 rounded-full bg-white border border-orange-300 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
              >
                🔍
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContextHero;
