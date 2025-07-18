import Aos from "aos";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import bgImage from '/src/assets/Images/dt_addNewGoalInfo.webp'; // make sure the path is correct

const AddGoalIntro = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (

<section
  className="misson-audience relative bg-cover bg-center min-h-[50vh] flex items-center justify-center px-6 py-12"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl w-full text-white font-primary flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto">
    {/* Text Content */}
    <div className="w-full lg:w-2/3 text-center lg:text-left">
      <h3 className="text-lg font-primary py-2 text-white">New Goals</h3>
      <h1 className="text-3xl md:text-4xl font-extrabold font-primaryBold mb-4">
        Effortless Goal Setting
      </h1>
      <p className="text-sm md:text-base leading-relaxed">
        Adding new learning goals to your DevTrack dashboard is simple and intuitive.
        Define your objectives, set deadlines, and track your progress—all in one place.
        Stay motivated and focused on achieving your development milestones with our
        user-friendly interface.
      </p>

      {/* Button */}
      <button className="bg-green-900 text-white flex items-center gap-2 py-2 px-6  border-green-500 rounded-sm mt-6 hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out">
        <FaPlus className="text-sm" />
        Start
      </button>
    </div>
  </div>
</section>

  );
};

export default AddGoalIntro;
