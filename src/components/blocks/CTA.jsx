import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl text-accent mb-6">
        Visit Us Today
      </h2>

      <Link to="/contact">
        <button className="px-10 py-4 bg-accent text-black rounded-full hover:scale-105 transition">
          Contact Us
        </button>
      </Link>
    </section>
  );
}