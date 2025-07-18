import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavButtons from './navButtons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUserName(parsed.name);
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`font-primary w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <h1 className="font-bold text-3xl z-50">
          <span className={`${scrolled ? 'text-white' : 'text-primary'}`}>Dev</span>
          <span className="text-gray-200">Track</span>
        </h1>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-md font-primaryELight absolute left-1/2 transform -translate-x-1/2">
          <li><a href="#home" className="hover:text-gray-300 cursor-pointer">Home</a></li>
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Right Buttons with User Name */}
        <div className="hidden md:flex items-center gap-4">
          {userName && (
            <span className="text-white font-primaryELight">
              Hi, <span className="font-semibold">{userName}</span>
            </span>
          )}
          <NavButtons
            showStart={true}
            showLearn={false}
            startClassName="border-white text-white hover:bg-white hover:text-black"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex flex-col gap-6 mt-16 text-white text-lg">
            <a href="#home" onClick={closeMenu} className="hover:text-gray-300">Home</a>
            <a href="#features" onClick={closeMenu} className="hover:text-gray-300">Features</a>
            <a href="#about" onClick={closeMenu} className="hover:text-gray-300">About</a>
            <a href="#contact" onClick={closeMenu} className="hover:text-gray-300">Contact</a>
            {userName && (
              <div className="text-white text-md">
                Hi, <span className="font-semibold">{userName}</span>
              </div>
            )}
            <div className="pt-6">
              <NavButtons
                showStart={true}
                showLearn={false}
                startClassName="w-full border-white text-white hover:bg-white hover:text-black"
              />
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/40 z-30 backdrop-blur-sm md:hidden"
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
