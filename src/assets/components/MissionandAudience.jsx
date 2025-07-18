import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const MissionandAudience = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="misson-audience bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
            {/* Heading + Text Container */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl w-full font-primary mb-12">
                <h1
                    className="text-3xl md:text-4xl font-extrabold text-primary font-primaryBold text-center lg:text-left w-full lg:w-1/2"
                    data-aos="fade-right"
                >
                    Our Mission and Audience
                </h1>

                <span className="text-sm md:text-base text-primary w-full lg:w-1/2 text-center lg:text-left leading-relaxed">
                    DevTrack is designed specifically for self-taught developers seeking a minimal,
                    intuitive platform to organize and monitor their learning progress. We aim to empower
                    independent learners with a clean, responsive dashboard featuring customizable goals,
                    visual progress indicators, and optional features like dark mode and timers.
                </span>
            </div>

            {/* Image with Overlay */}
            <div className="relative w-full max-w-5xl">
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none rounded-lg" />
                <img
                    src="/src/assets/Images/dt_mission_audience.webp"
                    alt="Mission"
                    className="w-full h-auto relative z-0 object-cover rounded-lg"
                />
            </div>
        </section>
    );
};

export default MissionandAudience;
