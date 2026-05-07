import { useState } from "react";

// Asset Imports cakes
import cake1 from "../assets/menu/cake1.png";
import cake2 from "../assets/menu/cake2.png";
import cake3 from "../assets/menu/cake3.png";
import cake4 from "../assets/menu/cake4.png";
import cake5 from "../assets/menu/cake5.png";
import cake6 from "../assets/menu/cake6.png";
import cake7 from "../assets/menu/cake7.png";
import cake8 from "../assets/menu/cake8.png";
import cake9 from "../assets/menu/cake9.png";
import cake10 from "../assets/menu/cake10.png";
import cake11 from "../assets/menu/cake11.png";
import cake12 from "../assets/menu/cake12.png";
import cake13 from "../assets/menu/cake13.png";
import cake14 from "../assets/menu/cake14.png";
import cake15 from "../assets/menu/cake15.png";
import cake16 from "../assets/menu/cake16.png";
import cake17 from "../assets/menu/cake17.png";
import cake18 from "../assets/menu/cake18.png";
import cake19 from "../assets/menu/cake19.png";
import cake20 from "../assets/menu/cake20.png";
import cake21 from "../assets/menu/cake21.png";
import cake22 from "../assets/menu/cake22.png";
import cake23 from "../assets/menu/cake23.png";
import cake24 from "../assets/menu/cake23.png";
import cake25 from "../assets/menu/cake24.png";
import cake26 from "../assets/menu/cake25.png";
import cake27 from "../assets/menu/cake27.png";
import cake28 from "../assets/menu/cake28.png";
import cake29 from "../assets/menu/cake29.png";
import cake30 from "../assets/menu/cake30.png";
import cake31 from "../assets/menu/cake31.png";
import cake32 from "../assets/menu/cake32.png";
import cake33 from "../assets/menu/cake33.png";
import cake34 from "../assets/menu/cake34.png";
import cake35 from "../assets/menu/cake35.png";
import cake36 from "../assets/menu/cake36.png";
import cake37 from "../assets/menu/cake37.png";
import cake38 from "../assets/menu/cake38.png";
import cake39 from "../assets/menu/cake39.png";
import cake40 from "../assets/menu/cake40.png";
import cake41 from "../assets/menu/cake41.png";
//import cold drinks
import cold1 from "../assets/menu/cold1.png"; 
import cold2 from "../assets/menu/cold2.png"; 
import cold3 from "../assets/menu/cold3.png"; 
import cold4 from "../assets/menu/cold4.png"; 
import cold5 from "../assets/menu/cold5.png"; 
import cold6 from "../assets/menu/cold6.png"; 
import cold7 from "../assets/menu/cold7.png"; 
import cold8 from "../assets/menu/cold8.png"; 
// import hot drinks
import hot1 from "../assets/menu/hot1.png"; 
import hot2 from "../assets/menu/hot2.png"; 
import hot3 from "../assets/menu/hot3.png"; 
import hot4 from "../assets/menu/hot4.png"; 
import hot5 from "../assets/menu/hot5.png"; 
import hot6 from "../assets/menu/hot6.png"; 
import hot7 from "../assets/menu/hot7.png"; 
import hot8 from "../assets/menu/hot8.png"; 
import hot9 from "../assets/menu/hot9.png"; 
import hot10 from "../assets/menu/hot10.png"; 
import hot11 from "../assets/menu/hot11.png"; 
import hot12 from "../assets/menu/hot12.png"; 
import hot13 from "../assets/menu/hot13.png"; 
import hot14 from "../assets/menu/hot14.png"; 
import hot15 from "../assets/menu/hot15.png"; 


const menuItems = [
  { name: "Cappuccino", price: "$4.49 — $6.19", img: hot1, category: "Hot Coffee" },
  { name: "Latte", price: "$4.49 — $6.19", img: hot3, category: "Hot Coffee" },
  { name: "Tea Selection", price: "$3.49", img: hot4, category: "Hot Coffee" },
  { name: "Caffè", price: "$2.49 — $3.79", img: hot5, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot6, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot7, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot8, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot9, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot10, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot11, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot12, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot13, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot14, category: "Hot Coffee" },
  { name: "Hot Cocoa", price: "$3.99 — $5.79", img: hot15, category: "Hot Coffee" },

  ,

  //Cold Drinks
  { name: "Banana Smoothie", price: "$7.79", img: cold1, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold2, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold3, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold4, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold5, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold6, category: "Cold Drinks" },
  { name: "Mango Smoothie", price: "$7.79", img: cold7, category: "Cold Drinks" },
  { name: "Strawberry Smoothie", price: "$7.79", img: cold8, category: "Cold Drinks" },

  //Gelato
  { name: "Oreo Gelato", price: "$7.79", img: hot1, category: "Gelato" },
  { name: "Pistachio Gelato", price: "$7.79", img: hot1, category: "Gelato" },
  { name: "Lemon Sorbet", price: "$7.79", img: hot2, category: "Gelato" },

  //cake
  { name: "Tiramisu", price: "$7.79", img: cake1, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake2, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake3, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake4, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake5, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake6, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake7, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake8, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake9, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake10, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake11, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake12, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake13, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake14, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake15, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake16, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake17, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake18, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake19, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake20, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake21, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake21, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake22, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake23, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake24, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake25, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake26, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake27, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake28, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake29, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake30, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake31, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake32, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake33, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake34, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake35, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake36, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake37, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake38, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake39, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake40, category: "Desserts" },
  { name: "Tiramisu", price: "$7.79", img: cake41, category: "Desserts" },


];

const categories = ["All", "Hot Coffee", "Cold Drinks", "Gelato", "Desserts"];

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