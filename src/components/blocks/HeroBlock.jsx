import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo2.png";

import img1 from "../../assets/menu/1.png";
import img2 from "../../assets/menu/2.png";
import img3 from "../../assets/menu/3.png";
import img4 from "../../assets/menu/4.png";
import img5 from "../../assets/menu/5.png";
import img6 from "../../assets/menu/6.png";
import img7 from "../../assets/menu/7.png";
import img8 from "../../assets/menu/8.png";
import img9 from "../../assets/menu/9.png";
import img10 from "../../assets/menu/10.png";

const bestSellers = [
  { name: "Espresso", img: img1 },
  { name: "Cappuccino", img: img2 },
  { name: "Latte", img: img3 },
  { name: "Vanilla Gelato", img: img4 },
  { name: "Chocolate Gelato", img: img5 },
  { name: "Pistachio Gelato", img: img6 },
  { name: "Macchiato", img: img7 },
  { name: "Mocha", img: img8 },
  { name: "Americano", img: img9 },
  { name: "Affogato", img: img10 },
];

export default function HeroBlock() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">

      {/* BACKGROUND IMAGE - Fixed and optimized */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* REPLACED BLUR DIVS WITH RADIAL GRADIENT - Much faster performance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(251,191,36,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_80%_80%,_rgba(251,191,36,0.1)_0%,_transparent_50%)]" />

      {/* DARK OVERLAY - Static opacity is faster than blurs */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-white px-6 w-full">

        {/* LOGO */}
        <motion.img
          src={logo}
          className="w-32 md:w-44 mb-4 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif italic tracking-tight text-white"
        >
          Casa di Moni
        </motion.h1>

        {/* SUBTITLE */}
        <p className="mt-2 text-gray-300 text-[10px] md:text-xs uppercase tracking-[0.5em] font-light">
          Luxury Gelato & Coffee
        </p>

        {/* CTA */}
        <Link to="/menu" className="mt-8">
          <button className="px-10 py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-amber-500 hover:text-white transition-colors duration-300">
            Explore Menu
          </button>
        </Link>

        {/* BEST SELLERS MARQUEE - Optimized for speed */}
        <div className="mt-16 w-full overflow-hidden border-t border-white/10 pt-10">
          <h3 className="text-[9px] tracking-[0.4em] text-gray-400 mb-6 uppercase">
            Signature Selection
          </h3>

          <div className="flex w-max gap-4 animate-scroll-fast will-change-transform">
            {[...bestSellers, ...bestSellers].map((item, index) => (
              <div
                key={index}
                className="
                  w-[140px] md:w-[180px]
                  h-[200px] md:h-[240px]
                  bg-[#111]/80
                  border border-white/5
                  flex flex-col
                  items-center
                  justify-between
                  p-4
                "
              >
                <div className="w-full h-32 flex items-center justify-center">
                  <img
                    src={item.img}
                    className="max-h-full max-w-full object-contain"
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-white/80">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* OPTIMIZED GPU ANIMATION */}
      <style>{`
        @keyframes scroll-fast {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .animate-scroll-fast {
          animation: scroll-fast 30s linear infinite;
        }

        /* Stops processing when not visible */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-fast {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}