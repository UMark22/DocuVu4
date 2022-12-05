import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DocumentAccess from "../documents/DocumentAccess";

const Group = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-lg border">
      <div className="py-2 text-lg ml-2 font-normal">
        <h1>Department</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:gap-4 xl:flex xl:flex-row xl:gap-4 md:flex md:flex-col md:gap-4 sm:flex sm:flex-col sm:gap-4 xsm:flex xsm:flex-col xsm:gap-4">
        <div className="bg-gray-100 rounded-xl shadow-lg border bg-white h-60 lg:w-[17rem] xl:w-[17rem] xmd:w-[100%] sm:w-[88%] xsm:w-[100%] justify-between py-[0.5 rem]">
          <div className="relative">
            <AiOutlineSearch
              size={18}
              className="focus:bg-white text-black absolute top-[20%] left-[90%] translate-1/2"
            />
            <input
              type="text"
              placeholder="Search Group"
              id="searchGroup"
              className="outline-0 border-[1.5px] border-gray-200 text-black w-full h-8 px-3 text-sm font-light rounded-lg"
            />
          </div>
          <div>
            <button className=" h-10 2xl-w-[17rem] lg:w-[17rem] xl:w-[17rem] xmd:w-full md:w-full sm:w-full xsm:w-full font-semibold text-[13px]  border-b-2 border-gray-100 outline-0 hover:bg-gray-100">
              <div className="pl-4">
                <div className="flex items-center ">
                  <span className="text-gray-700 text-sm italic">1.</span>
                  <span className="text-[13px]  text-gray-700 font-semibold ml-2">
                    Administrator
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className=" h-10  2xl-w-[17rem] lg:w-[17rem] xl:w-[17rem] md:w-full sm:w-full xsm:w-full font-semibold text-[13px]  border-b-2 border-gray-100 outline-0 hover:bg-gray-100">
              <div className="pl-4">
                <div className="flex items-center">
                  <span className="text-gray-700 text-sm italic">2.</span>
                  <span className="text-[13px] text-gray-700 font-semibold ml-2">
                    IT Department
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className=" h-10  2xl-w-[17rem] lg:w-[17rem] xl:w-[17rem] md:w-full sm:w-full xsm:w-full font-semibold text-[13px]  border-b-2 border-gray-100 outline-0 hover:bg-gray-100">
              <div className="pl-4">
                <div className="flex items-center">
                  <span className="text-gray-700 text-sm italic">3.</span>
                  <span className="text-[13px] text-gray-700 font-semibold ml-2">
                    Accounting
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className=" h-10  2xl-w-[17rem] lg:w-[17rem] xl:w-[17rem] md:w-full sm:w-full xsm:w-full font-semibold text-[13px]  border-b-2 border-gray-100 outline-0 hover:bg-gray-100">
              <div className="pl-4">
                <div className="flex items-center">
                  <span className="text-gray-700 text-sm italic">4.</span>
                  <span className="text-[13px] text-gray-700 font-semibold ml-2">
                    HR Department
                  </span>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className=" h-12  2xl-w-[17rem] lg:w-[17rem] xl:w-[17rem] md:w-full sm:w-full xsm:w-full font-semibold text-[13px]  outline-0 hover:bg-gray-100">
              <div className="pl-4">
                <div className="flex items-center">
                  <span className="text-gray-700 text-sm italic">5.</span>
                  <span className="text-[13px] text-gray-700 font-semibold ml-2">
                    Records
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]">
          <DocumentAccess />
        </div>
      </div>
      <div className="flex flex-row gap-4"></div>
    </div>
  );
};
export default Group;
