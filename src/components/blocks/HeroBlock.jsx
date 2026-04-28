import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo2.png";

const bestSellers = [
  {
    name: "Vanilla Gelato",
    img: "https://images.unsplash.com/photo-1505253213348-cd54c92b37e3",
  },
  {
    name: "Iced Latte",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  },
  {
    name: "Chocolate Gelato",
    img: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5",
  },
  {
    name: "Espresso",
    img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
  },
];

export default function HeroBlock() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* LIGHT GLOW LAYERS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-amber-300/20 blur-[140px] rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[160px] rounded-full top-[20%] right-[-200px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-orange-300/10 blur-[180px] rounded-full bottom-[-150px] left-[30%] animate-pulse" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-white px-6">

        <motion.img
          src={logo}
          className="w-44 h-30 mb-8 object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-display text-accent"
        >
          Casa di Moni
        </motion.h1>

        <p className="mt-4 text-gray-300 max-w-md">
          Luxury Gelato & Coffee Experience
        </p>

        <Link to="/menu">
          <button className="mt-8 px-10 py-3 bg-accent text-black rounded-full hover:scale-105 transition">
            Explore Menu
          </button>
        </Link>

        {/* ⭐ BEST SELLERS MARQUEE */}
        <div className="mt-14 w-full max-w-5xl overflow-hidden">

          <h3 className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-4">
            Best Sellers
          </h3>

          <div className="flex w-max gap-6 animate-scroll">

            {[...bestSellers, ...bestSellers].map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] h-[220px] bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col items-center justify-between p-3"
              >
                {/* IMAGE FIX (NO CROPPING) */}
                <div className="w-full h-[170px] flex items-center justify-center p-0">
                  <img
                    src={item.img}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="text-sm text-white text-center">
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* CONTINUOUS SCROLL ANIMATION */}
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>

    </section>
  );
}