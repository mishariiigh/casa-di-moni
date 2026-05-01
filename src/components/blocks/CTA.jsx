import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 bg-[#05050] overflow-hidden">
      
      {/* MINIMALIST BACKGROUND DETAIL */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* SMALL TOP LABEL */}
        <span className="text-[10px] uppercase tracking-[0.6em] text-gray-500 mb-6 block">
          Experience the Craft
        </span>

        {/* ELEGANT HEADING */}
        <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-10 tracking-tight">
          Visit Us Today
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 text-sm md:text-base font-light tracking-widest uppercase mb-12 max-w-xs mx-auto border-t border-white/5 pt-8">
          Ottawa • Ontario
        </p>

        {/* LUXURY CTA BUTTON */}
        <Link to="/contact" className="group relative inline-block">
          <button className="
            relative z-10
            px-14 py-5
            border border-white/20
            bg-transparent
            text-white text-[11px] uppercase tracking-[0.4em]
            overflow-hidden
            transition-all duration-500
            group-hover:border-amber-500/50
          ">
            {/* Slide-up Background Effect (Instant & GPU Friendly) */}
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference" />
            
            <span className="relative block group-hover:text-amber-200 transition-colors duration-500">
              Get in Touch
            </span>
          </button>
          
          {/* Subtle Outer Glow on Hover */}
          <div className="absolute inset-0 bg-amber-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </Link>

      </div>

      {/* BOTTOM DECORATIVE LINE */}
      <div className="mt-24 w-16 h-[1px] bg-white/10 mx-auto" />
      
    </section>
  );
}