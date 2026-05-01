import { useState } from "react";

import img1 from "../assets/menu/espresso.png";
import img2 from "../assets/menu/2.png";
import img3 from "../assets/menu/3.png";
import img4 from "../assets/menu/4.png";
import img5 from "../assets/menu/5.png";
import img6 from "../assets/menu/6.png";
import img7 from "../assets/menu/7.png";
import img8 from "../assets/menu/8.png";
import img9 from "../assets/menu/9.png";
import img10 from "../assets/menu/10.png";
import img11 from "../assets/menu/11.png";
import img12 from "../assets/menu/12.png";
import img13 from "../assets/menu/13.png";
import img14 from "../assets/menu/14.png";
import img15 from "../assets/menu/15.png";
import img16 from "../assets/menu/16.png";
import img17 from "../assets/menu/17.png";

const categories = ["All", "☕ Hot", "🧊 Smoothies", "🍨 Gelato", "🍰 Desserts"];

const menuItems = [
  { name: "Espresso", price: "$3", img: img1, category: "☕ Hot" },
  { name: "Cappuccino", price: "$4.49 - $6.19", img: img2, category: "☕ Hot" },
  { name: "Latte", price: "$4.49 - $6.19", img: img3, category: "☕ Hot" },
  { name: "Tea Selection", price: "$3.49", img: img4, category: "☕ Hot" },
  { name: "Cafe", price: "$2.49 - $3.79", img: img5, category: "☕ Hot" },
  { name: "Hot Cocoa", price: "$3.99 - $5.79", img: img6, category: "☕ Hot" },

  { name: "Banana Smoothie", price: "$7.79", img: img17, category: "🧊 Smoothies" },
  { name: "Mango Smoothie", price: "$7.79", img: img17, category: "🧊 Smoothies" },
  { name: "Strawberry Smoothie", price: "$7.79", img: img17, category: "🧊 Smoothies" },

  { name: "Oreo Gelato", price: "$7.79", img: img12, category: "🍨 Gelato" },
  { name: "Pistachio Gelato", price: "$7.79", img: img13, category: "🍨 Gelato" },
  { name: "Lemon Sorbet", price: "$7.79", img: img15, category: "🍨 Gelato" },

  { name: "Tiramisu", price: "$7.79", img: img16, category: "🍰 Desserts" },
  { name: "Chocolate Cake", price: "$7.79", img: img17, category: "🍰 Desserts" },
];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categoryOrder = ["☕ Hot", "🧊 Smoothies", "🍨 Gelato", "🍰 Desserts"];

  const filteredItems =
    activeFilter === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const renderCategory = (cat) => {
    const items = filteredItems.filter((item) => item.category === cat);
    if (!items.length) return null;

    return (
      <section key={cat} className="mb-14">

        {/* CATEGORY HEADER */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-white/10"></div>
          <h2 className="text-xl md:text-2xl text-accent tracking-wide">
            {cat}
          </h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(item)}
              className="
                group cursor-pointer
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl overflow-hidden
                hover:scale-[1.03] hover:border-white/20
                transition duration-300
                shadow-lg shadow-black/30
              "
            >
              {/* IMAGE */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* soft luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* INFO */}
              <div className="p-5">
                <h3 className="text-lg text-white">{item.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const visibleCategories =
    activeFilter === "All" ? categoryOrder : [activeFilter];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-20">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide text-accent">
          Our Menu
        </h1>
        <p className="text-gray-400 mt-3">
          A curated selection of handcrafted flavors
        </p>
      </div>

      {/* LUXURY FILTER BAR (sticky feel) */}
      <div className="flex justify-center mb-16">
        <div className="flex gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-5 py-2 rounded-full text-sm transition
                ${
                  activeFilter === cat
                    ? "bg-white text-black shadow-md"
                    : "text-gray-300 hover:text-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="space-y-10">
        {visibleCategories.map((cat) => renderCategory(cat))}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-zinc-900/90 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-6
              max-w-md w-full
              shadow-2xl
            "
          >
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="rounded-xl mb-5"
            />

            <h2 className="text-2xl text-white mb-2">
              {selectedItem.name}
            </h2>

            <p className="text-accent text-lg">
              {selectedItem.price}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}