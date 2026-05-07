import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// FIXED PATH (go up 2 levels)
import logo from "../../assets/logo2.png";

// FIXED ALL IMAGE PATHS
import img1 from "../../assets/menu/cake1.png";
import img2 from "../../assets/menu/cake2.png";
import img3 from "../../assets/menu/cake3.png";
import img4 from "../../assets/menu/cake4.png";
import img5 from "../../assets/menu/cake5.png";
import img6 from "../../assets/menu/cake6.png";
import img7 from "../../assets/menu/cake7.png";
import img8 from "../../assets/menu/cake8.png";
import img9 from "../../assets/menu/cake9.png";
import img10 from "../../assets/menu/cake10.png";

const bestSellers = [
  { name: "Espresso", img: img1, price: "€4" },
  { name: "Cappuccino", img: img2, price: "€5" },
  { name: "Latte", img: img3, price: "€6" },
  { name: "Vanilla Gelato", img: img4, price: "€7" },
  { name: "Chocolate Gelato", img: img5, price: "€7" },
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

        {/* REINVENTED BEST SELLERS GRID */}
        <div className="mt-20 w-full">
          <div className="flex flex-col items-center mb-12">
            <span className="h-px w-12 bg-amber-500/50 mb-4"></span>
            <h3 className="text-[10px] tracking-[0.5em] text-gray-300 uppercase font-medium">
              The Signature Collection
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
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col items-center justify-end p-6"
              >
                {/* Product Image with Float Animation */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center p-8 mb-12"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* Subtle Info Overlay */}
                <div className="relative z-10 w-full pt-4">
                  <p className="text-[10px] uppercase tracking-widest text-white font-semibold">
                    {item.name}
                  </p>
                  <p className="text-[9px] text-amber-500/70 mt-1 tracking-widest">{item.price}</p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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