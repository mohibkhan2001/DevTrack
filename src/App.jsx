import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import LandingPage from './assets/pages/LandingPage';
import DashboardLayout from './assets/layouts/DashboardLayout';
// your dashboard container

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route path="/dashboard/*" element={<DashboardLayout/>} />
      </Routes>
    </Router>
  );
};

export default App;
