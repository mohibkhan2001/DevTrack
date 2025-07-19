// src/pages/DevDashboard.jsx
import React, { useEffect, useState } from 'react';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardCard from '../components/Dashboard/DashboardCard'; // Still needed here for actual dashboard display (future dynamic)
import AddWidgetModal from '../components/Dashboard/AddWidgetModal'; // Import the modal component

import { FaPlus } from "react-icons/fa"; // Only FaPlus is needed here now

const LOCAL_STORAGE_USER_KEY = 'userData'; // Key for user name

const DevDashboard = () => {
  const [userName, setUserName] = useState("");
  // State to control the visibility of the AddWidgetModal
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);

  // This state will eventually hold the data for the cards actually displayed on the dashboard.
  // For now, it's empty, leading to the "Add Widget" message.
  const [dashboardDisplayCards, setDashboardDisplayCards] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (storedUser) {
      const { name } = JSON.parse(storedUser);
      setUserName(name);
    } else {
      setUserName("Guest");
    }

    // IMPORTANT: In future steps, this is where you'd use your custom hooks
    // (e.g., useHoursTracking, useGoalsTracking) to fetch and set the
    // dashboardDisplayCards based on which widgets the user has enabled
    // and what data is in localStorage.
    // For now, it starts empty as per your request.
    setDashboardDisplayCards([]);

  }, []);

  // This callback will be triggered from the modal when a widget action (like adding a goal) is done.
  // For now, it just closes the modal and logs.
  const handleWidgetAction = (typeIdentifier, data = null) => {
    console.log(`Action completed for type: ${typeIdentifier}`, data);
    // In future steps, you would update activeTrackingTypes in localStorage here
    // and trigger a re-calculation of dashboardDisplayCards.
    setIsAddWidgetModalOpen(false); // Close the modal
  };

  return (
    <>
      <DashboardHeader />
      <section className='dashboard max-w-screen h-full bg-white'>
        <div className='w-full flex items-center justify-between p-6'>
          <div className="flex flex-col justify-center">
            <h1 className='text-3xl font-primary font-bold text-primary'>
              Welcome Back, {userName}
            </h1>
            <span className='text-lg font-light text-gray-500'>
              Here's your learning progress overview
            </span>
          </div>

          <button
            onClick={() => setIsAddWidgetModalOpen(true)} // Opens the modal
            className="cursor-pointer bg-primary text-white flex items-center gap-2 py-2 px-6 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            <FaPlus className="text-sm" />
            Add Widget
          </button>
        </div>

        {/* Conditional message when no cards are displayed */}
        {dashboardDisplayCards.length === 0 ? (
          <div className="text-center p-10 text-gray-500 text-lg">
            You haven't added any tracking widgets yet. Click 'Add Widget' to get started!
          </div>
        ) : (
          // This section will eventually display the active cards based on user selection
          <div className="flex flex-wrap justify-center gap-6 p-6 max-w-7xl mx-auto">
            {dashboardDisplayCards.map((data) => (
              <div key={data.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(50%-1.5rem)]">
                <DashboardCard
                  title={data.title}
                  value={data.value}
                  unit={data.unit}
                  change={data.change}
                  icon={data.icon}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Conditionally render the AddWidgetModal */}
      {isAddWidgetModalOpen && (
        <AddWidgetModal
          onClose={() => setIsAddWidgetModalOpen(false)} // Callback to close the modal
          onWidgetAction={handleWidgetAction} // Callback for when a widget is selected/configured
        />
      )}
    </>
  );
};

export default DevDashboard;