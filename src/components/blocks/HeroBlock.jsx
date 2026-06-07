import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Fixed Asset Paths
import logo from "../../assets/logo.png";

// Import your Gelato items
import RegularCone from "../../assets/menu/Regular Cone (Selection).png";
import SugarCone from "../../assets/menu/Small Cup.png";
import ChocolateWaffleCone from "../../assets/menu/Medium Cup.png";
import SmallCup from "../../assets/menu/Large Cup.png";
import MediumCup from "../../assets/menu/Sugar Cone.png";

const bestSellers = [
  { name: "Regular Cone", img: RegularCone, price: "Market Price" },
  { name: "Small", img: SugarCone, price: "Market Price" },
  { name: "Medium Cup", img: ChocolateWaffleCone, price: "Market Price" },
  { name: "Large Cup", img: SmallCup, price: "Market Price" },
  { name: "Sugar Cone", img: MediumCup, price: "Market Price" },
];

export default function HeroBlock() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black py-20">
      
      {/* BACKGROUND & OVERLAYS */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)] opacity-80" />
      <div className="absolute inset-0 bg-black/40" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-white px-6 w-full max-w-7xl">
        
        <motion.img
          src={logo}
          alt="Casa di Moni Logo"
          className="w-24 md:w-32 mb-6 object-contain opacity-80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-serif italic tracking-tighter text-white"
        >
          Casa di Moni
        </motion.h1>

        <p className="mt-4 text-amber-500/80 text-[10px] md:text-xs uppercase tracking-[0.8em] font-light">
          Artisanal Excellence
        </p>

        {/* SIGNATURE COLLECTION GRID - FULL FRAME LAYOUT */}
        <div className="mt-20 w-full">
          <div className="flex flex-col items-center mb-12">
            <span className="h-px w-12 bg-amber-500/50 mb-4"></span>
            <h3 className="text-[10px] tracking-[0.5em] text-gray-300 uppercase font-medium">
              Signature Gelato Collection
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {bestSellers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-900 flex flex-col items-center transition-all duration-500 hover:border-amber-500/30"
              >
                {/* FULL FRAME IMAGE */}
                <div className="absolute inset-0">
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Subtle Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* TEXT AREA (Editorial positioning at bottom) */}
                <div className="relative z-10 w-full text-center mt-auto p-6 pb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-medium mb-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-amber-500 font-semibold">
                      {item.price}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Link to="/menu" className="mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-transparent border border-white/20 text-white text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Discover Full Menu
          </motion.button>
        </Link>
      </div>
    </section>
  );
}