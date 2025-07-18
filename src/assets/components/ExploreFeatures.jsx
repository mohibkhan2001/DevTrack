import React, { useEffect } from 'react';
import NavButtons from './navButtons';
import Aos from 'aos';

const featuresData = [
  {
    id: 1,
    title: "Customizable Learning Goals",
    description:
      "Tailor your learning experience with DevTrack’s customizable goals. Set specific objectives, define milestones, and track your progress visually. Stay motivated and focused on what matters most to your development journey.",
    image: "/src/assets/Images/dt_customized_learning_goals.webp", // Replace with your real image paths
  },
  {
    id: 2,
    title: "Detailed Progress Tracking",
    description:
      "Monitor your progress with DevTrack's detailed tracking features. Visualize your achievements, identify areas for improvement, and stay motivated as you see your skills grow. Keep a close eye on your learning curve.",
    image: "/src/assets/Images/dt_detailed_progress_track.webp",
  },
  {
    id: 3,
    title: "Intuitive User Interface",
    description:
      "Navigate DevTrack with ease thanks to its intuitive user interface. Designed with developers in mind, our platform offers a seamless and user-friendly experience. Focus on learning, not on figuring out the software.",
    image: "/src/assets/Images/dt_intuitive_ui.webp",
  },
  {
    id: 4,
    title: "Streak Tracker",
    description:
      "Stay motivated with our streak tracker, celebrating your daily commitment to learning. Build momentum and achieve your goals with consistent progress.",
    image: "/src/assets/Images/dt_streak_tracker.webp", // Replace with your real image paths
  },
  {
    id: 5,
    title: "Learning Timeline",
    description:
      "Visualize your learning journey with our timeline feature, tracking milestones and progress over time. Reflect on your achievements and stay motivated",
    image: "/src/assets/Images/dt_timeline.webp",
  },
  {
    id: 6,
    title: "Pomodoro Timer",
    description:
      "Boost productivity with our integrated Pomodoro timer, optimizing your focus and preventing burnout. Customize work and break intervals for peak performance",
    image: "/src/assets/Images/dt_timer.webp",
  },

];

const ExploreFeatures = () => {

    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <section className="bg-white py-16 px-6 min-h-screen font-primary">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-primaryBold text-primary mb-4">
          Explore DevTrack Features
        </h1>
        <p className="text-md text-primary">
          Discover how DevTrack empowers your self-taught journey with tools that keep you on track.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            data-aos="zoom-in"
            
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1 gap-4">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 flex-1">{feature.description}</p>
              <div className="mt-4">
                <NavButtons showStart={false} showLearn={true} learnClassName='border-primary text-xs'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreFeatures;
