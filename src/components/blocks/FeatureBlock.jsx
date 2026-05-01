export default function FeatureBlock() {
  const items = [
    {
      title: "Handcrafted Gelato",
      desc: "Made fresh in small batches using premium Italian ingredients.",
    },
    {
      title: "Premium Coffee",
      desc: "Carefully sourced beans roasted for a rich, balanced flavor.",
    },
    {
      title: "Italian Experience",
      desc: "A refined atmosphere inspired by authentic Italian cafés.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-amber-300/5 blur-[180px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[200px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      <div className="relative text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
          Crafted with Purpose
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Every detail is designed to deliver a refined café experience
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              group relative
              bg-white/5
              backdrop-blur-md  /* 1. Reduced from 2xl for performance */
              border border-white/10
              rounded-3xl
              p-8
              overflow-hidden
              transition-transform duration-300 ease-out
              hover:scale-[1.03]
              will-change-transform /* 2. Promotes to GPU layer */
              shadow-lg shadow-black/30
            "
          >
            {/* Soft glow accent - Optimized opacity transition */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-300/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl text-amber-200 mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}