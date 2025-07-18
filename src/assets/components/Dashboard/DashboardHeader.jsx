import React, { useState } from "react";
import {
    VscLayoutSidebarLeftOff,
    VscLayoutSidebarLeft,
    VscSettingsGear,
} from "react-icons/vsc";
import DashboardSidebar from "./DashboardSidebar";

const DashboardHeader = () => {
    const [isSidebar, setIsSidebar] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="dashboard-header max-w-screen flex items-center justify-between p-4 border-b border-gray-200 z-20 bg-white/30 backdrop-blur-md">

                <div
                    className="sidebar-toggle cursor-pointer text-xl text-primary p-2 rounded-lg hover:bg-gray-200 transition"
                    onClick={() => setIsSidebar((prev) => !prev)}
                >
                    {isSidebar ? (
                        <VscLayoutSidebarLeft />
                    ) : (
                        <VscLayoutSidebarLeftOff />
                    )}
                </div>


                <div className="settings-icon">
                    <VscSettingsGear className="text-4xl text-primary p-2 rounded-lg bg-gray-200 transition cursor-pointer" />

                </div>
            </header>

           <DashboardSidebar isSidebar={isSidebar} />

        </>
    );
};

export default DashboardHeader;
