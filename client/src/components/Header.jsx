import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="top-0 left-0 w-full bg-white shadow-xl z-50">
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 lg:px-32">
        {/* Logo */}
        <motion.div
          whileHover={{ rotateY: 15, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="block">
            <h1 className="text-3xl font-bold text-blue-700 drop-shadow-md">Logo</h1>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-medium text-base">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.15, rotateZ: 2 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              <Link
                to={item.to}
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Login Button - Desktop */}
        <motion.div
          whileHover={{ scale: 1.08, rotateZ: -1 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex items-center"
        >
          <button className="bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-2 rounded-xl text-white font-semibold shadow-md hover:shadow-xl transition-all">
            Login
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="text-3xl block lg:hidden text-violet-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white shadow-inner flex flex-col items-center font-semibold text-lg px-6 pb-6"
          >
            <ul className="flex flex-col items-start gap-4 w-full">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className="text-gray-800 text-xl hover:text-blue-600 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05, rotateZ: -1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-violet-800 px-5 py-2 rounded-xl text-white shadow-md font-semibold hover:shadow-lg"
            >
              Login
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;