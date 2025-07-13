import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import { FaCheckCircle } from "react-icons/fa";
import featureImage from "../Images/dt_chart2.jpg";
import featureImage2 from "../Images/dt_chart.jpg";

const FeaturesIntro = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const glide = new Glide(sliderRef.current, {
            type: "carousel",
            perView: 1,
            gap: 32,
            autoplay: 4000,
            hoverpause: true,
        });

        glide.mount();
        return () => glide.destroy();
    }, []);

    return (
        <section className="featuresIntro bg-black py-16 px-4 font-primary">
            <div ref={sliderRef} className="glide max-w-6xl mx-auto">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {/* Slide 1: Text Left, Image Right */}
                        <li className="glide__slide">
                            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden h-[550px]">
                                {/* Text Left */}
                                <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
                                    <h1 className="text-4xl text-primary font-primaryBold">
                                        Achieve Your Learning Goals with DevTrack
                                    </h1>
                                    <span className="text-gray-600 text-lg">
                                        DevTrack’s customizable learning goal cards empower you to
                                        define, track, and achieve your learning objectives. Stay
                                        motivated by visualizing your progress and managing your
                                        goals in one dashboard.
                                    </span>
                                    <div className="space-y-4 text-md text-gray-800">
                                        {[
                                            "Set Specific Goals: Define clear and achievable learning objectives.",
                                            "Track Your Progress: Monitor your advancement with visual progress indicators.",
                                            "Stay Motivated: Keep yourself engaged and driven towards success."
                                            
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-primary mt-1" />
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Image Right */}
                                <div className="md:w-1/2 h-full">
                                    <img
                                        src={featureImage}
                                        alt="DevTrack Features"
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </li>

                        {/* Slide 2: Image Left, Text Right */}
                        <li className="glide__slide">
                            <div className="flex flex-col md:flex-row bg-black rounded-xl shadow-lg overflow-hidden h-[550px] text-white">
                                {/* Image Left */}
                                <div className="md:w-1/2 h-full">
                                    <img
                                        src={featureImage2}
                                        alt="DevTrack Use Case"
                                        className="w-full h-full object-cover"
                                        loading="eager"
                                    />
                                </div>

                                {/* Text Right */}
                                <div className="md:w-1/2 p-8 flex flex-col justify-center gap-6">
                                    <h1 className="text-4xl font-primaryBold">
                                        Visualize Your Progress with DevTrack's Intuitive Dashboard
                                    </h1>
                                    <span className=" text-lg">
                                        DevTrack’s dashboard offers a clear, visual representation
                                        of your learning journey. Track your progress, stay
                                        motivated, and achieve your goals with ease. Our intuitive
                                        design ensures a seamless experience, helping you stay
                                        focused on what matters most: learning and growth.
                                    </span>
                                    <div className="space-y-4 text-md ">
                                        {[
                                            "Track your learning goals in real-time.",
                                            "Visualize your progress with interactive charts.",
                                            "Stay motivated with clear milestones and achievements"

                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <FaCheckCircle className="text-white mt-1" />
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Glide Bullets */}
                <div
                    className="glide__bullets flex justify-center mt-6"
                    data-glide-el="controls[nav]"
                >
                    <button className="glide__bullet mx-2" data-glide-dir="=0"></button>
                    <button className="glide__bullet mx-2" data-glide-dir="=1"></button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesIntro;
