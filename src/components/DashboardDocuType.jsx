import React from "react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Pagination from "./Pagination";

const DashboardDocuType = () => {
  const [Open, setOpen] = useState(true);

  return (
    <div className="bg-white pt-3 pb-4 rounded-sm  border-0 border-t-[3px] border-[#3C8DBC] flex-1 justify-between">
      <div className="bg-white rounded-sm p-4 flex-1 flex items-center h-[10px] justify-between">
        <div className="">
          <strong className="text-gray-700 font-medium ">Document Type</strong>
        </div>
        <div>
          <div>
            <span className="pt-1 duration-300">
              {!Open ? (
                <FiMinus
                  className="duration-100"
                  onClick={() => setOpen(!Open)}
                />
              ) : null}
              {Open ? (
                <FiPlus
                  className="duration-100"
                  onClick={() => setOpen(!Open)}
                />
              ) : null}
            </span>
          </div>
        </div>
      </div>
      {Open ? (
        <div className="border-0 border-gray-200 rounded-sm mt-3  ">
          <Pagination />
        </div>
      ) : null}
    </div>
  );
};

export default DashboardDocuType;
