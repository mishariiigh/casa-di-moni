const menuItems = [
    { name: "Espresso", price: "$3" },
    { name: "Cappuccino", price: "$5" },
    { name: "Latte", price: "$5.5" },
    { name: "Vanilla Gelato", price: "$4" },
    { name: "Chocolate Gelato", price: "$4.5" },
    { name: "Pistachio Gelato", price: "$5" },
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
              <div className="h-40 bg-gradient-to-br from-brown to-black rounded-xl mb-4"></div>
  
              <h3 className="text-xl text-accent">{item.name}</h3>
              <p className="text-gray-400 mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }