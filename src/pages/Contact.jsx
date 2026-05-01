export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6 flex flex-col items-center justify-center">
      
      {/* Header - Editorial Style */}
      <div className="max-w-4xl w-full text-center mb-20">
        <span className="uppercase tracking-[0.3em] text-xs text-amber-500/80 mb-4 block">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-white/90">
          Contact US
        </h1>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Inquiries</h3>
            <p className="text-2xl font-light hover:text-amber-200 transition-colors duration-300">
              info@casadimoni.ca
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Phone</h3>
            <p className="text-2xl font-light hover:text-amber-200 transition-colors duration-300">
              +1 (613) 789-7172
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Visit Us</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Byward Market<br />
              Ottawa, Ontario
            </p>
          </div>
        </div>

        {/* Right Side: Minimalist Form */}
        <form className="space-y-10 w-full">
          <div className="group relative">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600 font-light"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="group relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600 font-light"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-500 group-focus-within:w-full" />
          </div>

          <div className="group relative">
            <textarea
              rows="4"
              placeholder="Tell us about your project"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600 font-light resize-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-500 group-focus-within:w-full" />
          </div>

          <button className="group relative flex items-center justify-center w-full py-6 border border-white/10 hover:border-amber-500/30 transition-all duration-500 overflow-hidden">
            <span className="relative z-10 uppercase tracking-[0.2em] text-sm group-hover:text-amber-200 transition-colors">
              Send Message
            </span>
            {/* Subtle hover background sweep */}
            <div className="absolute inset-0 bg-white/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </form>

      </div>
    </section>
  );
}