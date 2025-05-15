import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  let menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className=" top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold hover:scale-105 transition-all">Logo</h1>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-base">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="transform transition-transform duration-300 hover:scale-110 hover:rotate-y-6"
            >
              <Link
                to={item.to}
                className="text-black hover:text-blue-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="bg-blue-600 px-4 py-2 rounded-xl text-white hover:text-black hover:scale-105 transition-all">
            Login
          </button>
        </div>

        {/* Toggle Menu Mobile */}
        <button
          className="text-3xl block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white flex flex-col items-center font-semibold text-lg ${
          isMenuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 w-full">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="transform transition-transform duration-300 hover:scale-110 hover:rotate-y-6"
            >
              <Link
                to={item.to}
                className="text-black text-xl font-semibold hover:text-blue-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded-xl text-white hover:text-black">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
