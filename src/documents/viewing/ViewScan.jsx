import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import PreviewScanner from "./PreviewScanner";
import { AiOutlineScan } from "react-icons/ai";
import { SiConvertio } from "react-icons/si";

const ViewScan = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  return (
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
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-lg ml-2 font-semibold">Scanner</h1>
              </div>
              <div className="relative pt-2  ml-[0px] -mt-3">
                <button
                  type="submit"
                  id="btnConvertOCR"
                  className="h-8 w-28 bg-[#0972B8] rounded-md border border-[#0972B8] text-[13px] text-white "
                  onClick={() => alert("Converted")}
                >
                  <SiConvertio
                    size={20}
                    className="absolute top-[25%] left-[8%] -translate-1/2"
                  />
                  OCR
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="px-5">
              <span className="text-[13px] text-gray-400">
                Please select a scanner
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-4 pb-7">
            <div className="px-5 w-full">
              <select
                id="Scanner"
                className="w-full text-[13px] p-1 border-dotted border border-gray-700 outline-0"
              >
                <option value disabled>
                  Please select a scanner
                </option>
                <option value="1">CamDS</option>
                <option value="2">KODAK Scanner:i1210/i220</option>
                <option value="3">KODAK Scanner:i1310/i320</option>
                <option value="4">KODAK Scanner:i1410/i420</option>
                <option value="5">KODAK Scanner:Ngenuity 9000</option>
                <option value="6">Kofax Sotware VES-TWAIN</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-10">
              <span className="text-gray-400 text-[12px]">
                Autodetect Color, Letter Size, 300 DPI, Front Sides
              </span>
            </div>
            <div className="px-5">
              <span className="text-[13px] text-black font-semibold pb-2">
                Or use a predefined scan setting
              </span>
            </div>
            <div className="px-10">
              <div className="pb-3">
                <input type="radio" id="rdAuto" className="" />
                <label htmlFor="rdAuto" className="pl-1 text-[11px]">
                  Autodetect Color Mode
                </label>
              </div>
              <div className="pb-3">
                <input type="radio" id="rdBW" className="" />
                <label htmlFor="rdBW" className="pl-1 text-[11px]">
                  Black and White Document
                </label>
              </div>
              <div className="pb-3">
                <input type="radio" id="rdColorDocu" className="" />
                <label htmlFor="rdColorDocu" className="pl-1 text-[11px]">
                  Color Document
                </label>
              </div>
              <div className="pb-3">
                <input type="radio" id="rdGray" className="" />
                <label htmlFor="rdGray" className="pl-1 text-[11px]">
                  Grayscale Document
                </label>
              </div>
              <div className="pb-5">
                <input type="radio" id="rdBW" className="" />
                <label htmlFor="rdBW" className="pl-1 text-[11px]">
                  Color Photograph
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center pb-2">
            <div className="bg-[#0972B8] relative text-white cursor-pointer font-semibold py-2 px-4 rounded inline-flex items-center mr-6">
              <button
                type="submit"
                id="btnScan"
                className="mr-1 text-[12px] w-[70px] text-center"
                onClick={() => setShow(!show)}
              >
                <AiOutlineScan
                  size={20}
                  className="mr-2 absolute top-[50%] left-[8%] -translate-y-1/2"
                />
                Scan
              </button>
            </div>
          </div>
        </div>
        <div className="2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%] shadow-xl rounded-xl bg-gray-200">
          {!show ? (
            <div className="w-full h-full ">
              <PreviewScanner />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ViewScan;
