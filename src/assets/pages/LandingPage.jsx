import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MissionandAudience from '../components/MissionandAudience';
import FeaturesIntro from '../components/FeaturesIntro';
import AddGoalIntro from '../components/AddGoalIntro';
import ExploreFeatures from '../components/ExploreFeatures';
import UserDetailsForm from '../components/userDetailsForm'; // 🧠 new import

const LandingPage = () => {
  const [user, setUser] = useState(null);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setIsFirstVisit(true); // show form
    }
  }, []);

  const handleUserSubmit = (userData) => {
    setUser(userData);
    setIsFirstVisit(false);
  };

  return (
    <main>
      {isFirstVisit && <UserDetailsForm onUserSubmit={handleUserSubmit} />}

      {/* Only show landing page content if user exists */}
      {user && (
        <>
          <Hero />
          <MissionandAudience />
          <FeaturesIntro />
          <AddGoalIntro />
          <ExploreFeatures />
        </>
      )}
    </main>
  );
};

export default LandingPage;
