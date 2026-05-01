import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 1. MINIMALIST TOGGLE - No background, just sharp lines */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-8 left-8 z-[60] group flex flex-col gap-1.5 p-2 outline-none"
      >
        <div className={`h-[1px] w-8 bg-white transition-all duration-500 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`h-[1px] w-8 bg-white transition-all duration-500 ${open ? "opacity-0" : "opacity-100"}`} />
        <div className={`h-[1px] w-8 bg-white transition-all duration-500 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* 2. OVERLAY - Simplified for speed */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 z-[40] cursor-none"
          />
        )}
      </AnimatePresence>

      {/* 3. LUXURY SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-full md:w-80 bg-[#050505] border-r border-white/5 z-50 transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          open ? "translate-3d-0" : "-translate-x-full"
        }`}
        style={{ transform: open ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)" }}
      >
        <div className="p-12 flex flex-col h-full">

          {/* LOGO SECTION */}
          <div className="flex flex-col items-start mb-20">
            <img
              src={logo}
              alt="Casa di Moni"
              className="w-20 mb-6 opacity-80"
            />
            <h2 className="text-white font-serif italic text-2xl tracking-tighter">
              Casa di Moni
            </h2>
            <div className="w-8 h-[1px] bg-amber-500/50 mt-4" />
          </div>

          {/* NAVIGATION - Vertical Luxury Spacing */}
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="group relative overflow-hidden"
              >
                <motion.span 
                  className="block text-2xl font-light uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors duration-500"
                >
                  {link.name}
                </motion.span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            ))}
          </nav>

          {/* FOOTER SPACE */}
          <div className="mt-auto flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-[0.5em] text-gray-600">
              Ottawa • Ontario
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/20">
              © {new Date().getFullYear()} Crafted by Casa di Moni
            </div>
          </div>

        </div>
      </aside>

      {/* CSS For Performance Acceleration */}
      <style>{`
        .translate-3d-0 {
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </>
  );
}