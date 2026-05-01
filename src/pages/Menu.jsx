import { useState } from "react";

// Asset Imports
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

const menuItems = [
  { name: "Espresso", price: "$3.00", img: img1, category: "Hot Coffee" },
  { name: "Cappuccino", price: "$4.49 — $6.19", img: img2, category: "Hot Coffee" },
  { name: "Latte", price: "$4.49 — $6.19", img: img3, category: "Hot Coffee" },
  { name: "Tea Selection", price: "$3.49", img: img4, category: "Hot Coffee" },
  { name: "Caffè", price: "$2.49 — $3.79", img: img5, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: img6, category: "Hot Coffee" },
  { name: "Banana Smoothie", price: "$7.79", img: img17, category: "Smoothies" },
  { name: "Mango Smoothie", price: "$7.79", img: img17, category: "Smoothies" },
  { name: "Strawberry Smoothie", price: "$7.79", img: img17, category: "Smoothies" },
  { name: "Oreo Gelato", price: "$7.79", img: img12, category: "Gelato" },
  { name: "Pistachio Gelato", price: "$7.79", img: img13, category: "Gelato" },
  { name: "Lemon Sorbet", price: "$7.79", img: img15, category: "Gelato" },
  { name: "Tiramisu", price: "$7.79", img: img16, category: "Desserts" },
  { name: "Chocolate Cake", price: "$7.79", img: img17, category: "Desserts" },
];

const categories = ["All", "Hot Coffee", "Smoothies", "Gelato", "Desserts"];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = activeFilter === "All" 
    ? categories.slice(1) 
    : [activeFilter];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6 md:px-16 selection:bg-amber-500/30">
      
      {/* Editorial Header */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        <span className="uppercase tracking-[0.4em] text-[10px] text-amber-500/80 mb-4 block animate-pulse">
          Est. 2026
        </span>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tight">
          The Menu
        </h1>
        <p className="text-gray-500 font-light tracking-[0.2em] uppercase text-[11px] max-w-xs mx-auto border-t border-white/10 pt-6">
          Handcrafted Italian Excellence
        </p>
      </header>

      {/* Minimalist Tab Filter */}
      <nav className="flex justify-center mb-24">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="group relative py-1 overflow-hidden"
            >
              <span className={`text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                activeFilter === cat ? "text-amber-400" : "text-gray-500 group-hover:text-white"
              }`}>
                {cat}
              </span>
              <div className={`absolute bottom-0 left-0 h-[1px] bg-amber-500 transition-all duration-500 ${
                activeFilter === cat ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          ))}
        </div>
      </nav>

      {/* Menu List Sections */}
      <div className="max-w-6xl mx-auto space-y-32">
        {filteredCategories.map((category) => (
          <section key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center gap-8 mb-16">
              <h2 className="text-2xl font-serif italic text-amber-100/90 whitespace-nowrap">
                {category}
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-amber-500/20 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedItem(item)}
                    className="group cursor-pointer flex items-end justify-between py-2 transition-opacity hover:opacity-80"
                  >
                    <div className="flex items-center gap-6">
                      {/* Refined Circular Thumbnails */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-light tracking-wide text-white/90 group-hover:text-amber-100 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">
                          Signature item
                        </p>
                      </div>
                    </div>

                    {/* Aesthetic Dotted Leader */}
                    <div className="flex-1 border-b border-dotted border-white/10 mx-4 mb-2 min-w-[20px]" />

                    <span className="font-serif italic text-amber-200/80 text-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Refined Full-Screen Detail View */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-8 animate-in fade-in duration-500"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img 
                src={selectedItem.img} 
                className="w-full h-full object-cover" 
                alt={selectedItem.name} 
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-amber-500 uppercase tracking-[0.3em] text-[10px]">
                  {selectedItem.category}
                </span>
                <h2 className="text-6xl font-serif italic mt-2">{selectedItem.name}</h2>
              </div>
              
              <div className="h-[1px] w-24 bg-amber-500/50" />
              
              <p className="text-gray-400 font-light leading-relaxed text-lg italic">
                A masterpiece of flavor, prepared fresh daily in our Ottawa kitchen using traditional techniques and premium imported ingredients.
              </p>

              <p className="text-4xl font-serif text-amber-100">
                {selectedItem.price}
              </p>

              <button 
                onClick={() => setSelectedItem(null)}
                className="pt-12 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
              >
                Close Gallery — [ ESC ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}