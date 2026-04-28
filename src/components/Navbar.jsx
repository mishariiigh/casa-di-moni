import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Casa di Moni" className="h-10" />
          <span className="text-accent font-display text-lg hidden md:block">
            Casa di Moni
          </span>
        </div>

        {/* LINKS */}
        <div className="space-x-6 text-sm">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About</Link>
          <Link to="/menu" className="hover:text-accent">Menu</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
}