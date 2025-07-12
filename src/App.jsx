import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import LandingPage from '../src/assets/pages/LandingPage'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage/>
        {/* Other sections... */}
      </main>
    </>
  );
};

export default App;
