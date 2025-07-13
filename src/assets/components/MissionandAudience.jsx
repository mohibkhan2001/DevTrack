import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const MissionandAudience = () => {

    useEffect(() => {
      Aos.init();
    }, [])
    
    return (
        <>
            <section className="misson-audience bg-white h-screen ">
                <div className="w-6xl h-1/2 flex justify-center items-center mt-4 font-primary m-auto">
                    <h1 className="text-4xl w-md font-extrabold text-primary font-primaryBold" data-aos="fade-right">Our Mission and Audience</h1>
                    <span className="w-1/2 text-md text-primary">
                        DevTrack is designed specifically for self-taught developers seeking
                        a minimal, intuitive platform to organize and monitor their learning
                        progress. We aim to empower independent learners with a clean,
                        responsive dashboard featuring customizable goals, visual progress
                        indicators, and optional features like dark mode and timers
                    </span>
                </div>
                <div className="relative w-full max-w-5xl m-auto">
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

                    {/* Image */}
                    <img
                        src="/src/assets/Images/dt_mission_audience.jpg"
                        alt="Mission"
                        className="w-full h-auto relative z-0 object-cover"
                    />
                </div>



            </section>
        </>
    );
};

export default MissionandAudience;
