import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import LandingPage from './assets/pages/LandingPage';
import DashboardLayout from './assets/layouts/DashboardLayout';
import Dashboard from './assets/pages/Dashboard';
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
        <Route path="/dashboard/*" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
