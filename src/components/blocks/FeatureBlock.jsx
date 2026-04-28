export default function FeatureBlock() {
    const items = [
      "Handcrafted Gelato",
      "Premium Coffee",
      "Italian Experience"
    ];
  
    return (
      <section className="py-20 px-10 grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition"
          >
            <h3 className="text-accent text-xl">{item}</h3>
          </div>
        ))}
      </section>
    );
  }