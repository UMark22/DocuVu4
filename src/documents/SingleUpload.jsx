import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCloudUpload } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { RiRouteLine } from "react-icons/ri";
import { RiArrowGoBackLine } from "react-icons/ri";
import ViewFIleUpload from "./viewing/ViewFIleUpload";

const SingleUpload = () => {
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
                <h1 className="text-lg ml-2 font-normal">File Upload</h1>
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="file"
                id="fileUpload"
                className=" w-[20rem] h-10 p-2 hidden text-[12px] text-gray-900 bg-gray-400 rounded-md border border-gray-400 cursor-pointer"
              />
              <label
                for="fileUpload"
                className=" cursor-pointer block w-full h-[35px] p-2 text-[12px] text-gray-900 bg-gray-200 rounded-md border border-gray-400 cursor-pointe"
              >
                Select File
              </label>
            </div>
            <div className="flex flex-row gap-4 pt-4 justify-start">
              <div className="pt-1">
                <span className="text-[12px] text-gray-700 font-semibold">
                  DOCTYPE
                </span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="uploadDoctype"
                  placeholder="Document Type"
                  className="w-full h-9 rounded-lg border-2 border-gray-400 px-2 text-[12px] outline-0 focus:border-black"
                />
              </div>
            </div>
            <div className="flex flex-col pt-3 justify-center">
              <div>
                <span className="text-[12px] text-gray-700 font-semibold mt-4">
                  INDEX
                </span>
              </div>
            </div>
            <div lassName="flex flex-row p-3">
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[12px]">Project</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-full h-9 rounded-lg border-2 border-gray-400 px-2 text-[12px] outline-0 focus:border-black"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[13px]">Name</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-full h-9 rounded-lg border-2 border-gray-400 px-2 text-[12px] outline-0 focus:border-black"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">
                      <span className="text-[13px]">Date</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="uploadDoctype"
                        placeholder="Text"
                        className="w-full h-9 rounded-lg border-2 border-gray-400 px-2 text-[12px] outline-0 focus:border-black"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-row gap-4 justify-start mt-8 ml-4">
                <div className="dropdown inline-block relative  pt-3">
                  <div className="">
                    <RiRouteLine
                      size={25}
                      className="text-white text-[12px] sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2"
                    />
                    <h1 className="text-center pt-2 rounded-lg h-10 w-[10rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px] cursor-pointer">
                      Route
                    </h1>
                  </div>
                  <div className="origin-top-right z-10 dropdown-menu absolute hidden  border-2 border-gray-300 text-black pt-1 w-[300px] h-[180px] ml-[40px] -mt-[230px] rounded-lg">
                    <div className="bg-white w-full h-full ">
                      <div className="flex w-full">
                        <div className="w-full">
                          <div className="relative pt-3 px-3">
                            <h1>Enter Username</h1>
                          </div>
                          <div className="relative pt-3 pb-5 w-[90%] ml-3">
                            <input
                              type="text"
                              id="txtSend"
                              placeholder="Username"
                              className="border border-gray-400 text-[13px] px-3 outline-0 h-8 mx-2 rounded-md w-full"
                            />
                          </div>
                          <div className="relative ">
                            <button
                              type="submit"
                              id="btnSendRoute"
                              className="text-center  rounded-lg h-10 w-28 border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px] float-right mr-3 mt-5 cursor-pointer"
                            >
                              <FiLink
                                size={20}
                                className="text-white text-[12px] absolute top-[50%] left-[4%] -translate-y-1/2"
                                onClick={() => alert("sdsds")}
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
                    className="text-center pl-3 rounded-lg h-10 w-[10rem] border-[1px] border-[#0972B8] bg-[#0972B8] text-white text-[12px]"
                  >
                    <BsCloudUpload
                      size={20}
                      className="text-white text-[12px] sm:absolute sm:top-[45%] sm:left-[7%] -translate-y-1/2"
                    />
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full 2xl:w-[75%] xl:w-[75%]  lg:w-[75%] md:w-full xmd:w-[95%] sm:w-[88%] xsm:w-[70%] ">
            <ViewFIleUpload />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUpload;
