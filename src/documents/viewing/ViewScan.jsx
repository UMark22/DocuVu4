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
    <div className="flex justify-start w-full h-full bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col pb-2 shadow-lg rounded-xl w-[34rem] h-full border">
        <div className="flex flex-row justify-start gap-4 p-2 ">
          <div className="flex justify-center w-[45px] h-[40px] -ml-1 mt-0 mb-4 bg-gray-200 rounded-lg">
            <button
              onClick={() => navigate("/document")}
              className="text-[22px] text-black relative"
            >
              <RiArrowGoBackLine />
            </button>
          </div>
          <div>
            <h1 className="text-lg mt-2 font-semibold">Scanner</h1>
          </div>
          <div className="relative pt-2 ml-14">
            <button
              type="submit"
              id="btnConvertOCR"
              className="h-8 w-28 bg-[#0972B8] rounded-md border border-[#0972B8] text-[13px] text-white"
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
        <div className="flex flex-row gap-4">
          <div className="px-5">
            <span className="text-[13px] text-gray-400">
              Please select a scanner
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 pb-10">
          <div className="px-5 w-full">
            <select
              id="Scanner"
              className="w-full p-1 border-dotted border border-gray-700 outline-0"
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
            <span className="text-gray-400 text-[13px]">
              Autodetect Color, Letter Size, 300 DPI, Front Sides
            </span>
          </div>
          <div className="px-5">
            <span className="text-[13x] text-black font-semibold">
              Or use a predefined scan setting
            </span>
          </div>
          <div className="px-10">
            <div className="pb-3">
              <input type="radio" id="rdAuto" className="" />
              <label htmlFor="rdAuto" className="pl-1 text-[13px]">
                Autodetect Color Mode
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdBW" className="" />
              <label htmlFor="rdBW" className="pl-1 text-[13px]">
                Black and White Document
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdColorDocu" className="" />
              <label htmlFor="rdColorDocu" className="pl-1 text-[13px]">
                Color Document
              </label>
            </div>
            <div className="pb-3">
              <input type="radio" id="rdGray" className="" />
              <label htmlFor="rdGray" className="pl-1 text-[13px]">
                Grayscale Document
              </label>
            </div>
            <div className="pb-5">
              <input type="radio" id="rdBW" className="" />
              <label htmlFor="rdBW" className="pl-1 text-[13px]">
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
      <div className="flex flex-row gap-4 bg-gray-200 w-full h-auto shadow-xl rounded-xl ml-4">
        {!show ? (
          <div className="w-full">
            <PreviewScanner />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ViewScan;
