import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className=" top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32">
        {/* Logo */}
        <Link to="/" className="transform hover:scale-105 transition-all duration-300">
          <h1 className="text-3xl font-bold text-blue-700 drop-shadow-md">Logo</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-medium text-base ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-xl transform transition duration-300 hover:scale-110 hover:rotate-[2deg]"
            >
              <Link
                to={item.to}
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button - Desktop */}
        <div className="hidden lg:flex items-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 rounded-xl text-white font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-3xl block lg:hidden text-blue-800 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 bg-white shadow-inner flex flex-col items-center font-semibold text-lg overflow-hidden ${
          isMenuOpen ? "max-h-screen py-6 px-8" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="transform transition duration-300 hover:scale-105 hover:translate-x-1"
            >
              <Link
                to={item.to}
                className="text-gray-800 text-xl hover:text-blue-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-blue-600 px-5 py-2 rounded-xl text-white shadow-md font-semibold hover:shadow-lg hover:text-black transition-all">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
