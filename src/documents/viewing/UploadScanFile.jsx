import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCloudUpload } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { RiArrowGoBackLine } from "react-icons/ri";

const UploadScanFile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4 bg-white w-full h-[33rem] rounded-xl shadow-lg border p-4">
        <div className="lg:flex lg:flex-row lg:gap-4 xl:flex xl:flex-row xl:gap-4 md:flex md:flex-col md:gap-4 sm:flex sm:flex-col sm:gap-4 xsm:flex xsm:flex-col xsm:gap-4 px-4">
          <div className="rounded-xl shadow-lg border bg-white h-full w-[40%] xl:w-[40%] lg:w-[40%] md:w-full sm:w-full p-4">
            <div className="flex flex-row justify-start gap-2">
              <div className="flex justify-center w-[45px] h-[40px] -ml-1 -mt-1 mb-4 bg-gray-200 rounded-lg">
                <button
                  onClick={() => navigate("/documents/viewscan")}
                  className="text-[22px] text-black relative"
                >
                  <RiArrowGoBackLine />
                </button>
              </div>
              <div>
                <h1 className="text-lg ml-2 font-normal">File Upload</h1>
              </div>
            </div>
            <div className="flex flex-row gap-4 pt-10 justify-start">
              <div className="pt-1">
                <span className="text-[15px] text-gray-700 font-semibold">
                  DOCTYPE
                </span>
              </div>
              <div>
                <input
                  type="text"
                  id="uploadDoctype"
                  placeholder="DocuType"
                  className="w-[14rem] h-8 rounded-sm border-2 border-gray-400 px-2 text-sm outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-10 justify-center">
              <div>
                <span className="text-base text-gray-700 font-semibold mt-4">
                  INDEX
                </span>
              </div>
            </div>
            <div lassName="flex flex-row gap-4 p-3">
              <table className="table-auto">
                <tbody>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[13px]">PROJECS</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-[14rem] h-8 rounded-sm border-2 border-gray-400 px-2 text-sm outline-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[13px]">NAME</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-[14rem] h-8 rounded-sm border-2 border-gray-400 px-2 text-sm outline-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[13px]">DATE</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-[14rem] h-8 rounded-sm border-2 border-gray-400 px-2 text-sm outline-0"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <div className="dropdown inline-block relative  pt-3 pb-5">
                <div className="">
                  <FiLink
                    size={20}
                    className="text-white text-sm sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2"
                  />
                  <h1 className="text-center pt-2 rounded-lg h-10 w-[10rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm">
                    Send
                  </h1>
                </div>
                <div className="origin-top-right z-10 dropdown-menu absolute hidden  border-2 border-gray-400 text-black pt-1 w-[300px] h-auto ml-[10rem] -mt-28">
                  <div className="bg-white w-full h-full ">
                    <div className="flex w-full">
                      <div className="w-full">
                        <div className="relative pt-3 px-3">
                          <h1>Enter Username</h1>
                        </div>
                        <div className="relative pt-3 pb-5">
                          <input
                            type="text"
                            id="txtSend"
                            placeholder="username"
                            className="border border-gray-400 text-sm px-2 outline-0 h-8 mx-2 rounded-md"
                          />
                        </div>
                        <div className="relative left-[11rem] pt-3 pb-2">
                          <button
                            type="submit"
                            id="MultiUpload"
                            className="text-center pl-3 rounded-lg h-10 w-28 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm"
                          >
                            <FiLink
                              size={20}
                              className="text-white text-sm absolute top-[50%] left-[4%] -translate-y-1/2"
                            />
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pt-3 pb-5">
                <button
                  type="Upload"
                  id="sendUpload"
                  className="text-center pl-3 rounded-lg h-10 w-[10rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-sm"
                >
                  <BsCloudUpload
                    size={20}
                    className="text-white text-sm sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2"
                  />
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%]">
            <div className="flex flex-row gap-4 bg-gray-400 rounded-xl shadow-xl border-0 h-full justify-center ">
              <h1 className="font-semibold text-sm p-2">View FIleUpload</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4"></div>
      </div>
    </>
  );
};

export default UploadScanFile;
