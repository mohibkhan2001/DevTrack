// src/components/AddWidgetModal.jsx
import React, { useState } from 'react';
import DashboardCard from './DashboardCard'; // Path to your existing DashboardCard component

// Import all necessary icons
import { FaRegClock, FaCheckCircle, FaTrophy, FaBullseye, FaBookOpen, FaCross, FaCrosshairs} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

// --- Placeholder Form Components (No changes, just for context) ---
const NewGoalForm = ({ onSave, onCancel }) => {
  const [goalName, setGoalName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: goalName }, 'goalProgress');
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="text-xl font-bold mb-4">Set a New Learning Goal</h3>
      <input type="text" value={goalName} onChange={(e) => setGoalName(e.target.value)} placeholder="Goal Name" className="border p-2 w-full mb-4" required />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save Goal</button>
      </div>
    </form>
  );
};

const LogHoursForm = ({ onSave, onCancel }) => {
  const [hours, setHours] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ hours: parseFloat(hours) }, 'hours');
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="text-xl font-bold mb-4">Log Daily Study Hours</h3>
      <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="Hours" step="0.1" className="border p-2 w-full mb-4" required />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Log Hours</button>
      </div>
    </form>
  );
};

const TrackResourceForm = ({ onSave, onCancel }) => {
  const [resourceName, setResourceName] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: resourceName, totalUnits: parseInt(totalUnits) || 0, currentUnit: 0 }, 'resourceProgress');
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h3 className="text-xl font-bold mb-4">Track a Specific Resource</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Resource Name:</label>
        <input type="text" value={resourceName} onChange={(e) => setResourceName(e.target.value)} placeholder="e.g., React Crash Course" className="border p-2 w-full mb-4" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Total Units (e.g., Chapters/Lessons):</label>
        <input type="number" value={totalUnits} onChange={(e) => setTotalUnits(e.target.value)} placeholder="e.g., 20" className="border p-2 w-full mb-4" required />
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save Resource</button>
      </div>
    </form>
  );
};


// --- Main AddWidgetModal Component ---
const AddWidgetModal = ({ onClose, onWidgetAction }) => {
  const [selectedWidgetType, setSelectedWidgetType] = useState(null);

  const selectableWidgetOptions = [
    {
      id: 'option-set-goal',
      title: 'Set a New Learning Goal',
      description: 'Define a new objective for your learning journey.',
      icon: <FaBullseye />,
      type: 'goalProgress',
      value: 'Create',
      unit: '',
    },
    {
      id: 'option-log-hours',
      title: 'Log Daily Study Hours',
      description: 'Record the time you spend learning each day.',
      icon: <FaRegClock />,
      type: 'hours',
      value: 'Add Now',
      unit: '',
    },
    {
      id: 'option-track-resource',
      title: 'Track a Specific Resource',
      description: 'Monitor your progress through a course, book, or tutorial.',
      icon: <FaBookOpen />,
      type: 'resourceProgress',
      value: 'Start',
      unit: '',
    },
    {
      id: 'option-streak',
      title: 'Daily Learning (Streak)',
      description: 'Activate display for your consecutive learning days.',
      icon: <FaTrophy />,
      type: 'streak',
      value: 'Activate',
      unit: '',
    },
    {
      id: 'option-goals-completed',
      title: 'Goals Completed',
      description: 'Enable display for your total completed lessons/goals.',
      icon: <FaCheckCircle />,
      type: 'lessonsCompleted',
      value: 'Enable',
      unit: '',
    },
  ];

  const handleSaveSpecificForm = (data, typeIdentifier) => {
    onWidgetAction(typeIdentifier, data);
    setSelectedWidgetType(null);
  };

  const handleEnableDisplayCard = (typeIdentifier) => {
    onWidgetAction(typeIdentifier, null);
    setSelectedWidgetType(null);
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center p-4 z-50 font-primary">
      {/* Added 'hide-scrollbar' class here */}
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-5xl max-h-[calc(100vh-6rem)] overflow-y-auto hide-scrollbar">
        <div className="flex justify-between items-center mb-6 top-0 bg-white pb-4 z-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedWidgetType ? `Add ${selectableWidgetOptions.find(w => w.type === selectedWidgetType)?.title}` : 'Choose a Tracking Widget'}
          </h2>
          {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl leading-none"></button> */}
          <FaX onClick={onClose} className="text-gray-500 hover:text-gray-700 text-sm leading-none cursor-pointer"/>
          
        </div>

        {!selectedWidgetType && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {selectableWidgetOptions.map((data) => (
              <div
                key={data.id}
                className="relative border-2 border-transparent rounded-lgcursor-pointer transition-all duration-200 ease-in-out h-[180px]"
                onClick={() => {
                  if (data.type === 'goalProgress') {
                    setSelectedWidgetType(data.type);
                  } else if (data.type === 'hours') {
                    setSelectedWidgetType(data.type);
                  } else if (data.type === 'resourceProgress') {
                    setSelectedWidgetType(data.type);
                  } else if (data.type === 'streak' || data.type === 'lessonsCompleted') {
                    handleEnableDisplayCard(data.type);
                  }
                }}
              >
                <DashboardCard
                  title={data.title}
                  value={data.value}
                  unit={data.unit}
                  change={data.description}
                  icon={data.icon}
                />
              </div>
            ))}
          </div>
        )}

        {selectedWidgetType === 'goalProgress' && (
          <NewGoalForm onSave={handleSaveSpecificForm} onCancel={() => setSelectedWidgetType(null)} />
        )}
        {selectedWidgetType === 'hours' && (
          <LogHoursForm onSave={handleSaveSpecificForm} onCancel={() => setSelectedWidgetType(null)} />
        )}
        {selectedWidgetType === 'resourceProgress' && (
          <TrackResourceForm onSave={handleSaveSpecificForm} onCancel={() => setSelectedWidgetType(null)} />
        )}
      </div>
    </div>
  );
};

export default AddWidgetModal;