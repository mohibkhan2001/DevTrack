import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaBullseye,
  FaClipboardCheck,
  FaBook,
  FaChartPie,
} from "react-icons/fa";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: <FaHome className="text-lg" /> },
  { path: "/progress", label: "Progress", icon: <FaChartLine className="text-lg" /> },
  { path: "/goals", label: "Goals", icon: <FaBullseye className="text-lg" /> },
  { path: "/check-in", label: "Daily Check-in", icon: <FaClipboardCheck className="text-lg" /> },
  { path: "/resources", label: "Resources", icon: <FaBook className="text-lg" /> },
  { path: "/analytics", label: "Analytics", icon: <FaChartPie className="text-lg" /> },
];

const DashboardSidebar = ({ isSidebar }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const { name } = JSON.parse(storedUser);
      setUserName(name);
    }
    else{
      setUserName("Guest");
    }
  }, []);


  return (
    <div
      className={`fixed left-0 h-screen w-64 bg-white text-black font-primary shadow-lg transform transition-transform duration-300 z-10 ${isSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="p-6">
        <h1 className="font-bold text-xl z-50 mb-8">
          <span>Dev</span>
          <span className="text-gray-200">Track</span>
        </h1>

        <nav className="flex flex-col gap-1 text-primary">
          {navItems.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 text-left px-4 py-2 rounded-lg transition text-sm font-medium ${isActive ? "bg-gray-600 text-white" : "hover:bg-gray-100"
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer with user name */}
      <div className="w-full px-6">
        <div className="flex items-center gap-3 text-sm text-primary mt-28">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div className="text-black text-md">
            <span className="font-semibold">{userName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
