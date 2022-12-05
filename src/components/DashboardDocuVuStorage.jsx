import React from "react";
import { FiHardDrive } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { AiFillFolder } from "react-icons/ai";

const DashboardDocuVuStorage = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="w-full bg-white p-4 shadow-md rounded-xl flex items-center">
          <div className="h-20 w-20 flex items-center justify-center rounded-full  bg-gray-100 shadow-inner shadow-zinc-300">
            <FiHardDrive className="text-2xl text-sky-500" />
          </div>
          <div className="pl-4">
            <span className="text-[12px] text-black font-semibold">
              C: Drive
            </span>
            <div className="flex items-center">
              <strong className=" text-[12px] text-basic text-black font-semibold">
                90%
              </strong>
            </div>
            <div className="flex items-center">
              <span className="text-[12px] text-black font-light">
                1.48TB free of 1.79TB
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white  p-4 shadow-md rounded-xl flex items-center">
          <div className="h-20 w-20 flex items-center justify-center rounded-full  bg-gray-100 shadow-inner shadow-zinc-300">
            <FiHardDrive className="text-2xl text-green-500" />
          </div>
          <div className="pl-4">
            <span className="text-[12px] text-black font-semibold">
              D: Drive
            </span>
            <div className="flex items-center">
              <strong className="text-[12px] text-black font-semibold">
                70%
              </strong>
            </div>
            <div className="flex items-center">
              <span className="text-[12px] text-black font-light">
                1.20TB free of 2.79TB
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-4 shadow-md rounded-xl flex items-center">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-100 shadow-inner shadow-zinc-300">
            <FaUserAlt className="text-2xl text-blue-500" />
          </div>
          <div className="pl-4">
            <span className="text-[12px] text-black font-semibold">User</span>
            <div className="flex items-center">
              <strong className="text-[12px] text-black font-semibold">
                120
              </strong>
            </div>
            <div className=" items-center">
              <span className=" relative flex text-[12px] text-black font-light">
                Active Users :{" "}
                <p className="absolute px-[110%] text-green-400 font-medium">
                  68
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white  p-4 shadow-md rounded-xl flex items-center">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-100 shadow-inner shadow-zinc-300">
            <AiFillFolder className="text-2xl text-yellow-400" />
          </div>
          <div className="pl-4">
            <span className="text-[12px] text-black font-semibold">
              Document Types
            </span>
            <div className="flex items-center">
              <strong className="text-[12px] text-black font-semibold">
                10
              </strong>
            </div>
            <div className="flex items-center">
              <span className="text-[12px] text-black font-light">
                No. of Document Types
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDocuVuStorage;
