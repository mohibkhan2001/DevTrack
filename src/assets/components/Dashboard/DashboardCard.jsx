// src/components/Card.jsx
import React from 'react';

const DashboardCard = ({ title, value, unit, change, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:bg-gray-100 cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        {icon && <div className="text-gray-400 text-xl">{icon}</div>}
      </div>

      <div>
        <p className="text-2xl text-primary mb-1">
          {value}
          {unit && <span className="text-xl font-normal ml-1">{unit}</span>}
        </p>
        {change && <p className="text-sm text-green-500">{change}</p>}
      </div>
    </div>
  );
};

export default DashboardCard;
