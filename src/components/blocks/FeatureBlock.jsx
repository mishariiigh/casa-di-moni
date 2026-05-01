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
    <section className="relative py-32 px-6 bg-[#05050] text-white overflow-hidden">
      
      {/* 1. PERFORMANCE LIGHTING: Single radial gradient instead of multiple blur divs */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.6em] text-amber-500/80 mb-4 block">
          The Philosophy
        </span>
        <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight">
          Crafted with Purpose
        </h2>
        <div className="w-12 h-[1px] bg-white/20 mx-auto mt-8 mb-6" />
        <p className="text-gray-400 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto italic">
          Every detail is designed to deliver a refined café experience.
        </p>
      </div>

      {/* 2. ARCHITECTURAL CARDS: No backdrop-blur, uses solid hardware-accelerated layers */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto border border-white/5 bg-white/[0.02]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`
              group relative
              p-10 md:p-14
              transition-all duration-500
              ${i !== items.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''}
              hover:bg-white/[0.03]
              cursor-default
            `}
          >
            {/* Subtle interactive accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="relative z-10">
              <span className="text-[9px] text-amber-500/50 mb-6 block tracking-[0.3em] font-bold uppercase">
                0{i + 1}
              </span>
              <h3 className="text-xl md:text-2xl font-serif italic mb-4 group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed font-light tracking-wide">
                {item.desc}
              </p>
            </div>
            
            {/* Minimalist arrow detail */}
            <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-amber-500/50">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M5 12h14m-7-7l7 7-7 7"/>
               </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}