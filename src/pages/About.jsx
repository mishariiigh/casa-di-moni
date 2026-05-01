import { motion } from "framer-motion";
import locationImg from "../assets/location.png";

export default function About() {
  const hours = [
    { day: "Mon – Thu", time: "9:00 AM – 10:00 PM" },
    { day: "Fri – Sat", time: "9:00 AM – 11:00 PM" },
    { day: "Sunday", time: "9:00 AM – 10:00 PM" },
  ];

  return (
    <section className="min-h-screen w-full bg-[#050505] text-white flex items-center justify-center p-6 py-20">
      
      {/* BACKGROUND ACCENT - Performance friendly radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="space-y-10 text-center md:text-left">
          
          <header className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500/80 font-medium block">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
              Casa di Moni
            </h1>
            <div className="w-12 h-[1px] bg-white/20 mx-auto md:mx-0" />
          </header>

          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-xl tracking-wide">
            Located in the heart of Ottawa’s vibrant ByWard Market, we offer a variety of 
            authentic Italian dishes, specialty drinks, and over 100 flavours of artisan gelato. 
            Join us in a refined, luxury-inspired atmosphere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* LOCATION BOX */}
            <div className="border-l border-white/10 pl-6 py-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500 mb-2 font-bold">
                Address
              </p>
              <p className="text-gray-300 text-sm font-light leading-snug">
                51 York St, Ottawa,<br />ON K1N 9B7, Canada
              </p>
            </div>

            {/* HOURS BOX */}
            <div className="border-l border-white/10 pl-6 py-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500 mb-2 font-bold">
                Hours
              </p>
              <div className="text-[13px] text-gray-300 space-y-1 font-light">
                {hours.map((h, i) => (
                  <p key={i} className="flex justify-between md:justify-start md:gap-4">
                    <span className="text-gray-500">{h.day}</span>
                    <span>{h.time}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-amber-200/60 border border-white/5 px-6 py-3 bg-white/[0.02]">
            <span className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse" />
            Ottawa's Authentic Italian Experience
          </div>
        </div>

        {/* RIGHT IMAGE SECTION - Clean Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Hardware-accelerated frame (no complex blurs) */}
          <div className="relative p-3 border border-white/10 bg-white/[0.02] shadow-2xl">
            <img
              src={locationImg}
              alt="Casa di Moni ByWard Market"
              className="w-full max-w-md grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 object-cover"
            />
            
            {/* Minimalist Caption */}
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-black border border-white/10 p-6 shadow-2xl">
              <p className="text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold mb-1">Established</p>
              <p className="text-lg font-serif italic">ByWard Market</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}