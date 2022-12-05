import React from "react";
import { useNavigate } from "react-router-dom";
import { FiRefreshCcw } from "react-icons/fi";
import { TiCancel } from "react-icons/ti";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineSelect } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import SelectBulkUpload from "./viewing/SelectBulkUpload";

const MultipleUpload = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col bg-white h-full w-full 2xl:h-screen rounded-xl shadow-lg border pb-3 pt-3 pr-3 pl-3 overflow-hidden">
        <div className="h-full  2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col gap-4 justify-start p-3">
          <div className="w-full xl:w-[42%] lg:w-full md:w-full sm:w-[35rem] border bg-white border-gray-300 h-full  rounded-xl shadow-xl overflow-auto p-4 ">
            <div className="flex flex-row justify-start pl-3 pt-2 ">
              <div className="flex justify-center w-[45px] h-[40px] -ml-3 -mt-2 mb-5 bg-gray-200 rounded-lg">
                <button
                  onClick={() => navigate("/document")}
                  className="text-[22px] text-black relative"
                >
                  <RiArrowGoBackLine />
                </button>
              </div>
              <div>
                <h1 className="text-lg ml-2 font-normal">Multiple Upload</h1>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-start">
              <div>
                <span className="text-[12px] italic text-[#0972B8] font-semibold mt-4">
                  No file selected
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-4 pt-2 border border-gray-400 justify-between">
              <div>
                <span className="text-[13px] text-gray-700 font-semibold mt-4 pl-2">
                  List of CSV
                </span>
              </div>
              <div className="reltaive">
                <button
                  type="submit"
                  id="btnRefresh"
                  className="pr-2"
                  onClick={() => alert("Refresh")}
                >
                  <FiRefreshCcw />
                </button>
              </div>
            </div>
            <div lassName="flex flex-row gap-4 p-3">
              <div className="bg-transparent border border-gray-400 h-full">
                <table className="table-fixed h-full">
                  <tbody>
                    <tr>
                      <td className="w-96">
                        <span className="text-[12px] px-2">AA-SAMPLE.csv</span>
                      </td>
                      <td>
                        <button
                          type="submit"
                          id="btnSelect"
                          className="pr-1"
                          onClick={() => alert("Selected")}
                        >
                          <AiOutlineSelect size={25} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div lassName="flex flex-row gap-4 h-full w-full">
              <div className="flex justify-between pt-4 px-2">
                <div>
                  <span className="text-[13px] text-red-500 font-semibold">
                    Error(s):
                  </span>
                  <span className="pl-2 text-[15px]">0</span>
                </div>
                <div className="pr-36">
                  <span className="text-[13px] text-orange-500 font-semibold">
                    Warning(s):
                  </span>
                  <span className="pl-2 text-[15px]">0</span>
                </div>
              </div>
              <div className="bg-transparent border border-gray-400 h-full">
                <table className="table-auto">
                  <tr>
                    <td className="w-96">
                      <span className="text-[12px] px-2 italic text-red-500">
                        Existing Filename
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="flex flex-row gap-4 ml-5  mt-[45%]">
              <div className="relative ml-5 mt-1 border w-[140px] h-[40px]">
                <button
                  type="submit"
                  id="btnLoad"
                  className="text-center pl-3 rounded-lg h-full w-full border border-[#0972B8] bg-[#0972B8] text-white text-sm"
                >
                  <BsCloudUpload className="text-white text-[20px] sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2" />
                  Upload
                </button>
              </div>
              <div className="relative mt-1">
                <button
                  type="submit"
                  id="btnCancel"
                  className="text-center pl-3 rounded-lg h-10 w-[8rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm"
                >
                  <TiCancel className="text-white text-[23px] sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]">
            <SelectBulkUpload />
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleUpload;
