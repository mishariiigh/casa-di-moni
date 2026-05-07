import { motion } from "framer-motion";

export default function FeatureBlock() {
  const items = [
    {
      title: "Handcrafted Gelato",
      tags: ["Small Batch", "Italian Sourced"],
      desc: "Fresh daily with raw ingredients from the heart of Italy.",
    },
    {
      title: "Premium Coffee",
      tags: ["Single Origin", "Slow Roast"],
      desc: "A meticulous roasting process for a bold, velvety finish.",
    },
    {
      title: "Italian Experience",
      tags: ["Authentic", "Atmosphere"],
      desc: "The timeless elegance of a Milanese café in every detail.",
    },
  ];

  return (
    <section className="bg-black py-40 px-6 text-white border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        
        {/* HEADER: Extreme Minimalist */}
        <div className="mb-32">
          <h2 className="text-[12px] uppercase tracking-[0.8em] text-amber-500 mb-8">
            Our Core Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <h3 className="text-4xl md:text-7xl font-serif italic leading-[1.1]">
              The Art of the <br /> 
              <span className="text-white/40">Perfect Moment.</span>
            </h3>
            <div className="flex items-end">
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm">
                We don't just serve; we curate. Every scoop and every pour is an 
                expression of heritage.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES: Clean, Split-Screen Layout */}
        <div className="flex flex-col gap-24">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
            >
              {/* Index */}
              <div className="md:col-span-1 text-amber-500/30 font-mono text-sm pt-2">
                0{i + 1}
              </div>

              {/* Title & Tags */}
              <div className="md:col-span-6">
                <h4 className="text-3xl md:text-5xl font-serif italic group-hover:text-amber-500 transition-colors duration-500">
                  {item.title}
                </h4>
                <div className="flex gap-4 mt-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-5 pt-2">
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}