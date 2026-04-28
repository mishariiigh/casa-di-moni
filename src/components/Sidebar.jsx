import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo2.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 bg-accent text-black px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* LOGO SECTION */}
          <div className="flex items-center space-x-3 mb-10">
            <img
              src={logo}
              alt="Casa di Moni"
              className="w-16 h-12  object-cover"
            />
            <h2 className="text-accent text-2xl font-display">
              Casa di Moni
            </h2>
          </div>

          {/* NAV */}
          <nav className="flex flex-col space-y-5 text-white/80">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              About
            </Link>

            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Menu
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-accent transition"
            >
              Contact
            </Link>
          </nav>

          {/* FOOTER SPACE */}
          <div className="mt-auto text-xs text-white/30">
            © {new Date().getFullYear()} Casa di Moni
          </div>

        </div>
      </aside>
    </>
  );
}