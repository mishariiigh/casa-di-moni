import locationImg from "../assets/location.png";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-zinc-900 text-white flex items-center justify-center p-6">

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="space-y-6 text-center md:text-left">

          <h1 className="text-5xl md:text-6xl font-bold text-accent">
            About Casa di Moni
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to Casa di Moni. Located in the heart of Ottawa’s vibrant ByWard Market,
            we offer a variety of authentic Italian dishes, specialty drinks and over 100 flavours
            of artisan gelato. Join us for dine-in or takeout in a warm, luxury-inspired atmosphere.
          </p>

          {/* LOCATION BOX */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
            <p className="text-accent font-semibold mb-2">
              📍 Our Location
            </p>

            <p className="text-gray-300 text-sm">
              51 York St, Ottawa, ON, Canada, K1N 9B7
            </p>
          </div>

          <div className="text-sm text-green-400 pt-2">
            ✔ Authentic Italian experience in Ottawa
          </div>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center">

          <div className="relative w-full max-w-md">

            {/* glow effect */}
            <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-2xl"></div>

            {/* image card */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">

              <img
                src={locationImg}
                alt="Casa di Moni Location"
                className="w-full h-full object-cover"
              />

              {/* overlay label */}
              <div className="absolute bottom-0 w-full bg-black/60 p-3 text-center">
                <p className="text-sm text-white">
                  Casa di Moni • Ottawa Location
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}