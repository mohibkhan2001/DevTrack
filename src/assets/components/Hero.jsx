import React, { useEffect, useRef } from "react";
import dtHero from "../Images/dt_hero.jpg";
import NavButtons from "./navButtons";

const Hero = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    let timer;
    const animateLine = () => {
      let start = null;

      const draw = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const drawLength = Math.min(progress / 1000, 1) * length;
        path.style.strokeDashoffset = length - drawLength;

        if (progress < 1000) {
          requestAnimationFrame(draw);
        } else {
          path.style.strokeDashoffset = 0;
          timer = setTimeout(() => {
            path.style.strokeDashoffset = length;
            start = null;
            requestAnimationFrame(draw);
          }, 5000); // 5s delay before repeating
        }
      };

      requestAnimationFrame(draw);
    };

    animateLine();

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="hero h-screen w-full bg-cover bg-center relative zoom-animate"
      style={{ backgroundImage: `url(${dtHero})` }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="relative flex items-center justify-center h-full text-white text-center">
        <div className="flex flex-col items-center justify-evenly h-2/3">
          <h1 className="text-5xl font-primaryBold  text-white relative flex flex-col items-center mb-12">
            <span className="relative z-10 ">
              Welcome to your <br /> Learning Journey !
            </span>

            {/* SVG Positioned Absolutely Inside h1 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 700"
              className="absolute top-full mt-2 w-full h-[80px] z-0"
              preserveAspectRatio="none"
            >
              <path
                ref={pathRef}
                d="M301.0489196777344,145.53224182128906C343.5291058858236,144.26417643229166,599.1337669372558,135.18631922403972,600.9090576171875,136.58119201660156C602.6843482971192,137.9760648091634,317.63819427490233,158.2949524561564,313.58038330078125,155.37840270996094C309.52257232666017,152.46185296376547,535.6186014811198,121.57326997121174,572.2656860351562,115.99378204345703"
                fill="none"
                stroke="#fff"
                strokeWidth="20"
                strokeLinecap="round"
                transform="matrix(2.1828745883819374,0,0,2.1828745883819374,-533.4564588584024,-160.6687790641051)"
              />
            </svg>
          </h1>


          <p className="text-xl max-w-3xl font-primaryLight">
            DevTrack is designed to help self-taught developers like you stay
            organized and motivated. Track your progress, manage your goals, and
            celebrate your achievements all in one place. Let’s build something
            amazing together!
          </p>

          <NavButtons showStart={true} showLearn={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
