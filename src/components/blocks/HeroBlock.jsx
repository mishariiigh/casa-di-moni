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

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* SOFT LUXURY GLOWS */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-amber-300/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[180px] rounded-full top-[20%] right-[-200px]" />
        <div className="absolute w-[450px] h-[450px] bg-orange-300/10 blur-[200px] rounded-full bottom-[-200px] left-[30%]" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-white px-6">

        {/* LOGO */}
        <motion.img
          src={logo}
          className="w-40 md:w-52 mb-6 object-contain drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-light tracking-wide text-white"
        >
          Casa di Moni
        </motion.h1>

        {/* SUBTITLE */}
        <p className="mt-4 text-gray-300 max-w-md text-sm md:text-base tracking-wide">
          Luxury Gelato & Coffee Experience
        </p>

        {/* CTA */}
        <Link to="/menu">
          <button className="
            mt-8 px-10 py-3
            bg-white text-black
            rounded-full
            hover:scale-105
            transition
            shadow-lg
          ">
            Explore Menu
          </button>
        </Link>

        {/* BEST SELLERS */}
        <div className="mt-16 w-full max-w-6xl overflow-hidden">

          <h3 className="text-xs tracking-[0.4em] text-gray-300 mb-6 uppercase">
            Best Sellers
          </h3>

          {/* MARQUEE */}
          <div className="flex w-max gap-5 animate-scroll">

            {[...bestSellers, ...bestSellers].map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[180px] md:min-w-[200px]
                  h-[230px]
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  overflow-hidden
                  flex flex-col
                  items-center
                  justify-between
                  p-4
                  hover:scale-105
                  transition
                "
              >
                {/* IMAGE */}
                <div className="w-full h-[170px] flex items-center justify-center">
                  <img
                    src={item.img}
                    className="max-h-full max-w-full object-contain"
                    alt={item.name}
                  />
                </div>

                {/* NAME */}
                <p className="text-xs md:text-sm text-white/90 text-center">
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
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

    </section>
  );
}