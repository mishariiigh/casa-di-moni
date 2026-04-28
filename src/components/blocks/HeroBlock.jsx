import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo2.png";

// LOCAL IMAGES ONLY (from your menu folder)
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
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* LIGHT GLOWS */}
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
                {/* IMAGE */}
                <div className="w-full h-[170px] flex items-center justify-center">
                  <img
                    src={item.img}
                    className="max-w-full max-h-full object-contain"
                    alt={item.name}
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

      {/* ANIMATION */}
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