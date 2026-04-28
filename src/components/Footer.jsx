export default function Footer() {
    return (
      <footer className="bg-black text-center py-6 mt-10 border-t border-gray-800">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Casa di Moni. All rights reserved.
        </p>
      </footer>
    );
  }