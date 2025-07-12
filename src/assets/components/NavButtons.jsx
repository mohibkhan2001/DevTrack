import React from 'react';

const NavButtons = ({ showStart = true, showLearn = false }) => {
  return (
    <div className="flex gap-4">
      {showStart && (
        <button
          className=" rounded-sm px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </button>
      )}

      {showLearn && (
        <button
          className=" rounded-sm px-6 py-2 border border-white text-primary bg-white hover:text-black transition duration-300 ease-in-out"
          onClick={() => console.log('Learn More clicked')}
        >
          Learn More
        </button>
      )}
    </div>
  );
};

export default NavButtons;
