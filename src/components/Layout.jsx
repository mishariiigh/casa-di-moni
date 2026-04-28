import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="bg-primary text-light min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* 🌟 CENTERED LUXURY HEADER */}
      <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-center z-40 bg-black/30 backdrop-blur-md border-b border-white/10">

        <h1 className="text-xl md:text-2xl font-light tracking-[0.35em] cursor-pointer transition duration-300 hover:text-accent hover:scale-105">
          CASA DI MONI
        </h1>

      </header>

      {/* PAGE CONTENT */}
      <main className="pt-16">
        {children}
      </main>

    </div>
  );
}