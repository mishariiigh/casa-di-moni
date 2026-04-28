export default function About() {
    return (
      <div className="min-h-screen w-full bg-black text-white flex items-center justify-center p-10">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">
            About Us
          </h1>
  
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to Casa di Moni. This is the About page.
            If you can see this, routing is working correctly and the issue is in layout or styling.
          </p>
  
          <div className="mt-6 text-sm text-green-400">
            ✔ Page loaded successfully
          </div>
        </div>
      </div>
    );
  }