import { useState } from "react";

// Asset Imports (Ensure these match your file system exactly)
import Almond from "../assets/menu/Almond Croissant.png";
import Cappuccino from "../assets/menu/Cappuccino.png";
import CheeseCroissant from "../assets/menu/Cheese Croissant .png";
import ChocolateBrownie from "../assets/menu/Chocolate Brownie.png";
import ChocolateCroissant from "../assets/menu/Chocolate Croissant.png";
import ChocolateWaffleCone from "../assets/menu/Chocolate Waffle Cone.png";
import coffee from "../assets/menu/coffee.png";
import CookiesCreamCake from "../assets/menu/cookies & cream cake .png";
import Cortado from "../assets/menu/Cortado.png";
import CrèmeBrûlée from "../assets/menu/Crème Brûlée .png";
import CroissantPlain from "../assets/menu/Croissant (Plain).png";
import Espresso from "../assets/menu/Espresso.png";
import FlatWhite from "../assets/menu/Flat White.png";
import HotChocolate from "../assets/menu/Hot Chocolate.png";
import IcedCappuccino from "../assets/menu/Iced Cappuccino.png";
import IcedDrink from "../assets/menu/Iced Drink.png";
import IcedLatte from "../assets/menu/Iced Latte.png";
import IcedTea from "../assets/menu/Iced Tea.png";
import LargeCup from "../assets/menu/Large Cup.png";
import Latte from "../assets/menu/Latte.png";
import Macchiato from "../assets/menu/Macchiato.png";
import MediumCup from "../assets/menu/Medium Cup.png";
import MousseInTheCup from "../assets/menu/Mousse in the Cup.png";
import OrangeHotChocolate from "../assets/menu/Orange Hot Chocolate.png";
import PistachioChocolateBrownie from "../assets/menu/Pistachio Chocolate Brownie.png";
import PistachioCookie from "../assets/menu/Pistachio Cookie.png";
import PistachioCroissant from "../assets/menu/Pistachio Croissant.png";
import RainbowBurstCake from "../assets/menu/Rainbow Burst Cake.png";
import RedVelvetCake from "../assets/menu/Red Velvet Cake.png";
import RegularCone from "../assets/menu/Regular Cone (Selection).png";
import SkorCheesecake from "../assets/menu/Skor Cheesecake.png";
import SmallCup from "../assets/menu/Small Cup.png";
import Smoothies from "../assets/menu/Smoothies.png";
import StrawberryCheesecake from "../assets/menu/Strawberry Cheesecake.png";
import SugarCone from "../assets/menu/Sugar Cone.png";
import TeaSelection from "../assets/menu/Tea Selection.png";
import TiramisuCake from "../assets/menu/Tiramisu Cake.png";
import TiramisuInTheCup from "../assets/menu/Tiramisu in the Cup.png";
import TuxedoCake from "../assets/menu/Tuxedo Cake.png";

const menuItems = [
  // --- GELATO ---
  { name: "Small Cup", price: "—", img: SmallCup, category: "Gelato", description: "Authentic Italian Gelato: 2 Scoops / 2 Flavours" },
  { name: "Medium Cup", price: "—", img: MediumCup, category: "Gelato", description: "Authentic Italian Gelato: 2 Scoops / 2 Flavours" },
  { name: "Large Cup", price: "—", img: LargeCup, category: "Gelato", description: "Authentic Italian Gelato: 3 Scoops / 3 Flavours" },
  { name: "Regular Cone (Selection)", price: "—", img: RegularCone, category: "Gelato", description: "Authentic Italian Gelato: 1 Scoop / 1 Flavour" },
  { name: "Sugar Cone", price: "—", img: SugarCone, category: "Gelato", description: "Authentic Italian Gelato: 1 Scoop / 1 Flavour" },
  { name: "Chocolate Waffle Cone", price: "—", img: ChocolateWaffleCone, category: "Gelato", description: "Authentic Italian Gelato: 2 Scoops / 2 Flavours" },
 
  // --- HOT DRINKS ---
  { name: "Coffee", price: "—", img: coffee, category: "Hot Drinks", description: "Available in Small, Medium, Large" },
  { name: "Espresso (Double Shot)", price: "—", img: Espresso, category: "Hot Drinks", description: "Rich and concentrated shot of pure espresso" },
  { name: "Cortado", price: "—", img: Cortado, category: "Hot Drinks", description: "Equal parts espresso and warm milk" },
  { name: "Macchiato", price: "—", img: Macchiato, category: "Hot Drinks", description: "Espresso stained with a dollop of milk foam" },
  { name: "Flat White", price: "—", img: FlatWhite, category: "Hot Drinks", description: "Smooth espresso blended with velvety microfoam" },
  { name: "Cappuccino", price: "—", img: Cappuccino, category: "Hot Drinks", description: "Available in Small, Medium, Large" },
  { name: "Latte", price: "—", img: Latte, category: "Hot Drinks", description: "Available in Small, Medium, Large" },
  { name: "Tea Selection", price: "—", img: TeaSelection, category: "Hot Drinks", description: "A curated premium selection of hot teas" },
  { name: "Hot Chocolate", price: "—", img: HotChocolate, category: "Hot Drinks", description: "Served with a selection of syrup flavours" },
  { name: "Orange Hot Chocolate", price: "—", img: OrangeHotChocolate, category: "Hot Drinks", description: "Rich chocolate base with a twist of orange citrus notes" },

  // --- COLD DRINKS ---
  { name: "Iced Tea", price: "—", img: IcedTea, category: "Cold Drinks", description: "Alpine Berry + ice, selection from the syrups + soda water + ice" },
  { name: "Smoothies", price: "—", img: Smoothies, category: "Cold Drinks", description: "Made from 100% natural fruit purée mixed with sugar + ice + cold water" },
  { name: "Iced Drink", price: "—", img: IcedDrink, category: "Cold Drinks", description: "Selection of syrups + ice + soda water" },
  { name: "Iced Cappuccino", price: "—", img: IcedCappuccino, category: "Cold Drinks", description: "Chilled, frothy espresso blended with milk over ice" },
  { name: "Iced Latte", price: "—", img: IcedLatte, category: "Cold Drinks", description: "Chilled espresso with your selection of flavoured syrups" },

  // --- PASTRIES ---
  { name: "Croissant (Plain)", price: "—", img: CroissantPlain, category: "Pastries", description: "Buttery, flaky and golden for the perfect classic bite" },
  { name: "Chocolate Croissant", price: "—", img: ChocolateCroissant, category: "Pastries", description: "Flaky croissant dough filled with rich chocolate" },
  { name: "Almond Croissant", price: "—", img: Almond, category: "Pastries", description: "Flaky, buttery croissant filled with almond cream and topped with almonds" },
  { name: "Pistachio Croissant", price: "—", img: PistachioCroissant, category: "Pastries", description: "Flaky croissant filled with creamy pistachio and topped with pistachios" },
  { name: "Cheese Croissant", price: "—", img: CheeseCroissant, category: "Pastries", description: "Flaky croissant filled with delicious melted cheese" },
  { name: "Pistachio Cookie", price: "—", img: PistachioCookie, category: "Pastries", description: "Soft, chewy and packed with crunchy pistachios" },
  { name: "Chocolate Brownie", price: "—", img: ChocolateBrownie, category: "Pastries", description: "Rich, fudgy and intensely chocolatey" },
  { name: "Pistachio Chocolate Brownie", price: "—", img: PistachioChocolateBrownie, category: "Pastries", description: "Decadent chocolate brownie swirled with creamy pistachio" },

  // --- CAKES ---
  { name: "Tiramisu Cake", price: "—", img: TiramisuCake, category: "Cakes", description: "Classic Italian dessert with coffee-soaked layers and mascarpone cream" },
  { name: "Tuxedo Cake", price: "—", img: TuxedoCake, category: "Cakes", description: "Layers of rich chocolate mousse, coffee-soaked cake and mascarpone cream" },
  { name: "Red Velvet Cake", price: "—", img: RedVelvetCake, category: "Cakes", description: "Moist red velvet cake with cream cheese frosting" },
  { name: "Rainbow Burst Cake", price: "—", img: RainbowBurstCake, category: "Cakes", description: "Vibrant layers of vanilla cake with a touch of sweetness in every bite" },
  { name: "Cookies & Cream Cake", price: "—", img: CookiesCreamCake, category: "Cakes", description: "Delicious cookies & cream layers with a rich creamy finish" },
  { name: "Strawberry Cheesecake", price: "—", img: StrawberryCheesecake, category: "Cakes", description: "Creamy cheesecake topped with strawberry compote" },
  { name: "Skor Cheesecake", price: "—", img: SkorCheesecake, category: "Cakes", description: "Creamy cheesecake topped with caramel, Skor bits and chocolate" },
  { name: "Mousse in the Cup", price: "—", img: MousseInTheCup, category: "Cakes", description: "Light and creamy mousse with a rich chocolate indulgence" },
  { name: "Tiramisu in the Cup", price: "—", img: TiramisuInTheCup, category: "Cakes", description: "Classic tiramisu with coffee-soaked layers and mascarpone cream" },
  { name: "Crème Brûlée", price: "—", img: CrèmeBrûlée, category: "Cakes", description: "Silky smooth custard with a perfectly caramelized top" },
];

const categories = ["All", "Gelato", "Hot Drinks", "Cold Drinks", "Pastries", "Cakes"];

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const displayOrder = ["Gelato", "Hot Drinks", "Cold Drinks", "Pastries", "Cakes"];
  const filteredCategories = activeFilter === "All" ? displayOrder : [activeFilter];

  return (
    <div className="min-h-screen bg-[#070707] text-white py-24 px-6 md:px-16 selection:bg-amber-500/30 font-sans">
      <header className="max-w-4xl mx-auto text-center mb-24">
        <span className="uppercase tracking-[0.4em] text-[10px] text-amber-500/80 mb-4 block">Est. 2026</span>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tight text-amber-50/95">Casa di Moni</h1>
        <p className="text-gray-500 font-light tracking-[0.2em] uppercase text-[11px] max-w-xs mx-auto border-t border-white/10 pt-6">Café & Gelato Menu</p>
      </header>

      <nav className="flex justify-center mb-28">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className="group relative py-2 overflow-hidden">
              <span className={`text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 font-medium ${activeFilter === cat ? "text-amber-400" : "text-gray-500 group-hover:text-white"}`}>
                {cat}
              </span>
              <div className={`absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-500 ${activeFilter === cat ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto space-y-36">
        {filteredCategories.map((category) => (
          <section key={category}>
            <div className="flex items-baseline gap-6 mb-16 border-b border-white/5 pb-4">
              <h2 className="text-3xl font-serif italic text-amber-100/90">{category}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {menuItems.filter((item) => item.category === category).map((item, idx) => (
                <div key={idx} onClick={() => setSelectedItem(item)} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 border border-white/[0.06]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="pt-4 px-1">
                    <h3 className="text-lg text-white/90 group-hover:text-amber-300 transition-colors">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}