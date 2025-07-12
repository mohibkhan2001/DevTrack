import React, { useEffect, useState } from 'react';
import NavButtons from './NavButtons';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <h1 className="font-bold text-3xl">
          <span className={`${scrolled ? 'text-white' : 'text-primary'}`}>Dev</span>
          <span className="text-gray-200">Track</span>
        </h1>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white text-md font-thin absolute left-1/2 transform -translate-x-1/2">
          <li><a href="#home" className="hover:text-gray-300 cursor-pointer">Home</a></li>
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Right: Nav Buttons */}
        <div>
          <NavButtons showStart={true} showLearn={false} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
