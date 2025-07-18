import React from 'react';

const NavButtons = ({
  showStart = true,
  showLearn = false,
  startClassName = '',
  learnClassName = '',
}) => {
  return (
    <div className="flex gap-4">
      {showStart && (
        <button
          className={`rounded-sm px-6 py-2 border transition duration-300 ease-in-out ${startClassName}`}
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </button>
      )}

      {showLearn && (
        <button
          className={`rounded-sm px-6 py-2 border transition duration-300 ease-in-out ${learnClassName}`}
          onClick={() => console.log('Learn More clicked')}
        >
          Learn More
        </button>
      )}
    </div>
  );
};

export default NavButtons;
