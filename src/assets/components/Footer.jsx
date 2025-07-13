import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black font-primary px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Explore */}
        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About DevTrack</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: DevTrack */}
        <div>
          <h3 className="text-lg font-bold mb-4">DevTrack</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay up-to-date with the latest DevTrack news and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-black rounded-l-md w-full focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
        <p>Copyright © 2025 DevTrack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex gap-4 text-black text-lg">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
