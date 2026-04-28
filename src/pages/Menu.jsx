import img1 from "../assets/menu/1.png";
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
import img18 from "../assets/menu/18.png";
import img19 from "../assets/menu/19.png";
import img20 from "../assets/menu/20.png";
import img21 from "../assets/menu/21.png";

const menuItems = [
  { name: "Espresso", price: "$3", img: img1 },
  { name: "Cappuccino", price: "$5", img: img2 },
  { name: "Latte", price: "$5.5", img: img3 },
  { name: "Vanilla Gelato", price: "$4", img: img4 },
  { name: "Chocolate Gelato", price: "$4.5", img: img5 },
  { name: "Pistachio Gelato", price: "$5", img: img6 },

  // extra items (you can rename later)
  { name: "Macchiato", price: "$4", img: img7 },
  { name: "Mocha", price: "$5.5", img: img8 },
  { name: "Americano", price: "$3.5", img: img9 },
  { name: "Affogato", price: "$6", img: img10 },
  { name: "Cold Brew", price: "$5", img: img11 },
  { name: "Iced Latte", price: "$5.5", img: img12 },
  { name: "Hazelnut Gelato", price: "$5", img: img13 },
  { name: "Stracciatella", price: "$5", img: img14 },
  { name: "Lemon Sorbet", price: "$4.5", img: img15 },
  { name: "Tiramisu", price: "$6", img: img16 },
  { name: "Croissant", price: "$3.5", img: img17 },
  { name: "Chocolate Cake", price: "$6", img: img18 },
  { name: "Cheesecake", price: "$6", img: img19 },
  { name: "Espresso Shot", price: "$2.5", img: img20 },
  { name: "Gelato Mix", price: "$7", img: img21 },
];

export default function Menu() {
  return (
    <div className="px-10 py-20">
      <h1 className="text-5xl font-display text-accent mb-12 text-center">
        Our Menu
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
          >

            {/* IMAGE */}
            <div className="h-44 mb-4 rounded-xl overflow-hidden bg-black/20 flex items-center justify-center">
              <img
                src={item.img}
                className="max-h-full max-w-full object-contain"
                alt={item.name}
              />
            </div>

            <h3 className="text-xl text-accent">{item.name}</h3>
            <p className="text-gray-400 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}