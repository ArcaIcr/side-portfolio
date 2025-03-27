import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">MyPortfolio</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline text-blue-600 dark:text-blue-400">Contact</Link>
          <Link to="/projects" className="hover:underline text-blue-600 dark:text-blue-400">Projects</Link>
          <DarkModeToggle />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-blue-600 dark:text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 shadow-md overflow-hidden"
          >
            <Link
              to="/"
              className="block text-blue-600 dark:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/projects"
              className="block text-blue-600 dark:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
