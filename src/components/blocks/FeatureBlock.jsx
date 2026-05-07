import { motion } from "framer-motion";

const features = [
  {
    title: "Handcrafted Gelato",
    tag: "The Craft",
    desc: "Slow-churned excellence using imported Italian ingredients and local organic dairy.",
    align: "start"
  },
  {
    title: "Premium Coffee",
    tag: "The Roast",
    desc: "Single-origin beans roasted to extract the deep, velvet notes of authentic espresso.",
    align: "end"
  },
  {
    title: "Italian Experience",
    tag: "The Soul",
    desc: "From the first scoop to the last sip, a journey to the heart of Rome in Ottawa.",
    align: "start"
  }
];

export default function FeatureBlock() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Label */}
        <div className="flex items-center gap-4 mb-24 opacity-40">
          <div className="h-[1px] w-12 bg-amber-500" />
          <span className="text-[10px] uppercase tracking-[0.8em] text-white">Our Philosophy</span>
        </div>

        <div className="space-y-40">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${f.align === 'end' ? 'md:items-end text-right' : 'md:items-start text-left'}`}
            >
              <div className="max-w-xl relative group">
                {/* Decorative background text */}
                <span className="absolute -top-12 left-0 md:-left-8 text-8xl font-serif italic text-white/[0.03] pointer-events-none select-none">
                  {f.tag}
                </span>

                <span className="text-amber-500/60 text-[10px] uppercase tracking-[0.5em] mb-4 block">
                  {f.tag}
                </span>
                
                <h3 className="text-5xl md:text-7xl font-serif italic text-white mb-6 tracking-tight">
                  {f.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-md">
                  {f.desc}
                </p>

                {/* Animated Line Underneath */}
                <motion.div 
                  className="h-px bg-amber-500/30 mt-8 w-0"
                  whileInView={{ w: "100%" }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}