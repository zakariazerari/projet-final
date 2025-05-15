import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32">
        {/* Logo */}
        <a href="#">
          <h1 className="text-2xl font-bold hover:scale-105 transition-all">Logo</h1>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-base">
          <li className="hover:text-sky-400 cursor-pointer">Home</li>
          <li className="hover:text-sky-400 cursor-pointer">Products</li>
          <li className="hover:text-sky-400 cursor-pointer">Explore</li>
          <li className="hover:text-sky-400 cursor-pointer">Contact</li>
        </ul>

        {/* Login Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="bg-blue-600 px-4 py-2 rounded-xl text-white hover:text-black">
            Login
          </button>
        </div>

        {/* Toggle Menu Mobile */}
        <button
          className="text-3xl block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "x" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white flex flex-col items-center font-semibold text-lg ${
          isMenuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 w-full">
          <li className="w-full text-center p-4 hover:text-sky-400">Home</li>
          <li className="w-full text-center p-4 hover:text-sky-400">Products</li>
          <li className="w-full text-center p-4 hover:text-sky-400">Explore</li>
          <li className="w-full text-center p-4 hover:text-sky-400">Contact</li>
        </ul>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-xl text-white hover:text-black">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;