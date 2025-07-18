import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import LandingPage from '../src/assets/pages/LandingPage'
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage/>
        {/* Other sections... */}
      </main>
      <Footer/>
    </>
  );
};

export default App;
