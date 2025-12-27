import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";

/* ---------------- DATA ---------------- */
const heroContexts = [
  { image: "/assets/home/banner-1.webp", label: "Events & Venues" },
  { image: "/assets/home/banner-4.webp", label: "Outdoor Events" },
  { image: "/assets/home/newbanner-1.webp", label: "Indoor Setup" },
  { image: "/assets/home/newbanner-2.webp", label: "Home & Bedroom" },
  { image: "/assets/home/newbanner-3.webp", label: "Dining Area" },
  { image: "/assets/home/newbanner-4.webp", label: "Night Events" },
];

const CITY = "Pune";
const GAP = 12;

/* ---------------- SPRING ---------------- */
const SPRING = {
  type: "spring" as const,
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

/* ========================================================= */
/* ======================= MAIN ============================ */
/* ========================================================= */

const ContextHero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const isMobile = width < 768;

  if (isMobile) {
    return <MobileHeroCarousel />;
  }

  return <DesktopHeroCarousel />;
};

export default ContextHero;

/* ========================================================= */
/* ===================== MOBILE ============================= */
/* ========================================================= */

const MobileHeroCarousel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const startX = useRef<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const item = heroContexts[index];

  /* ---------------- AUTO SCROLL ---------------- */
  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setIndex((i) =>
        i >= heroContexts.length - 1 ? 0 : i + 1
      );
    }, 4500); // slow = premium
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#e9e9e9] via-[#dcdcdc] to-[#c8c8c8]">
      {/* IMAGE */}
      <div
        className="px-4"
        onTouchStart={() => stopAuto()}   // 👈 pause on touch
        onTouchEnd={() => startAuto()}    // 👈 resume after
      >
        <m.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onTouchStart={(e) => {
            startX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (startX.current === null) return;

            const diff =
              e.changedTouches[0].clientX - startX.current;

            if (diff < -60) {
              setIndex((i) =>
                Math.min(i + 1, heroContexts.length - 1)
              );
            } else if (diff > 60) {
              setIndex((i) =>
                Math.max(i - 1, 0)
              );
            }

            startX.current = null;
          }}
          className="relative h-[35vh] max-h-[560px] rounded-3xl overflow-hidden shadow-xl select-none"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur text-white px-5 py-2 rounded-full text-sm font-medium">
            {item.label}
          </div>
        </m.div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-5 gap-2">
        {heroContexts.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-orange-500"
                : "w-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* TEXT */}
      <div className="px-6 mt-8">
        <p className="text-orange-600 font-semibold mb-2">
          CoolRentZone Pune
        </p>
        <h1 className="text-3xl font-extrabold text-gray-900">
          Smart Cooling Rentals for Every Space
        </h1>

        <div className="relative mt-5">
          <input
            placeholder="Search air coolers, chillers..."
            className="w-full h-14 rounded-full border border-orange-300 pl-6 pr-14"
          />
          <button
            onClick={() => navigate("/catalog")}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 text-white"
          >
            🔍
          </button>
        </div>
      </div>
    </section>
  );
};


/* ========================================================= */
/* ===================== DESKTOP ============================ */
/* ========================================================= */

const DesktopHeroCarousel = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [cardWidth, setCardWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCards = 4;
  const maxIndex = heroContexts.length - visibleCards;

  /* Card width */
  useEffect(() => {
    if (!containerRef.current) return;

    const calc = () => {
      setCardWidth(containerRef.current!.offsetWidth / visibleCards);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  /* Autoplay */
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 4000);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [maxIndex]);

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-[#e9e9e9] via-[#dcdcdc] to-[#c8c8c8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Carousel */}
        <div ref={containerRef} className="relative overflow-hidden mb-10">
          <m.div
            className="flex ml-4"
            animate={{ x: -index * (cardWidth + GAP) }}
            transition={SPRING}
          >
            {heroContexts.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: cardWidth, paddingInline: GAP / 2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </m.div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-orange-500" : "w-2.5 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text + Search */}
        <div className="flex items-center justify-between gap-12">
          <div>
            <p className="text-orange-600 font-semibold mb-2">
              CoolRentZone {CITY}
            </p>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Smart Cooling Rentals for Every Space
            </h1>
          </div>

          <div className="relative w-full max-w-xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search air coolers, chillers..."
              className="w-full h-14 rounded-full border border-orange-300 pl-6 pr-14"
            />
            <button
              onClick={() =>
                navigate(`/catalog?search=${encodeURIComponent(query)}`)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 text-white"
            >
              🔍
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
