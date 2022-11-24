import React from "react";
import DashboardDocuVuStorage from "../components/DashboardDocuVuStorage";
import NoUploads from "../components/NoUploads";
import SystemInfo from "../components/SystemInfo";
import NoUsage from "../components/NoUsage";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="flex justify-start text-[15px] ml-2 font-light">
        <h1 className="mr-1">Hello,</h1>
        <span className="font-semibold">Jeyllou Maru &#x21;</span>
      </div>
      <DashboardDocuVuStorage />
      <div className="flex flex-row gap-4 h-[355px] sm:h-full lg:h-[353px] ">
        <SystemInfo />
        <NoUploads />
        <NoUsage />
      </div>
    </div>
  );
};

export default Dashboard;
