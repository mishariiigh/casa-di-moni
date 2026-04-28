export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-display text-accent mb-10 text-center">
          Contact Us
        </h1>
  
        <form className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-white/10">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-black/50 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black/50 rounded"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 bg-black/50 rounded"
          />
  
          <button className="w-full bg-accent text-black py-3 rounded-full hover:scale-105 transition">
            Send Message
          </button>
        </form>
  
        <p className="text-center text-grey-400 mt-6">
          info@casadimoni.ca  |  (613) 789-7172
        </p>

      </div>
    );
  }