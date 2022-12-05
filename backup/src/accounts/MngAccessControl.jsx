import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import MngHeader from "./MngHeader";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";

const MngAccessControl = () => {
  const navigate = useNavigate();

  const Menus = [
    { title: "Home", path: "/home", gap: true },
    {
      title: "Personal Info",
      src: <BsFillFileEarmarkPersonFill />,
      path: "/personalinfo",
      gap: true,
    },
    { title: "Security", src: <MdSecurity />, path: "/mngsecurity", gap: true },
    {
      title: "Access Control",
      src: <MdPrivacyTip />,
      path: "",
      gap: true,
      color: true,
    },
  ];
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden bg-gray-100">
        <div className="flex flex-row flex-1">
          <div
            className={`w-60  p-2 flex flex-col text-white relative duration-100`}
          >
            {/* Session for Links */}
            <div className="flex-1">
              <ul>
                <div className="mt-[26%] w-70 absolute ml-1 left-0 h-[320px] bg-gray-100 shadow-xm rounded-md">
                  <div className="ml-2 mt-2 mb-2">
                    <button
                      onClick={() => navigate(-1)}
                      className="text-[25px] text-black font-semibold"
                    >
                      <HiOutlineArrowLeft />
                    </button>
                  </div>
                  <p className="text-black text-left  px-6  pb-2  font-semibold text-xl">
                    Manage Account
                  </p>
                  {Menus.map((menu, index) => (
                    <li
                      key={index}
                      className={` text-black rounded-tr-2xl rounded-bl-2xl text-sm flex items-center gap-x-4 cursor-pointer p-2 
                             ${menu.gap ? "mt-5" : "mt-2"} ${
                        menu.color
                          ? "bg-gray-100 border shadow-md border-gray-200 w-[90%] ml-3 text-blue-700 "
                          : ""
                      }`}
                    >
                      <Link to={menu?.path} key={index}>
                        <div className="w-[210px]">
                          <span className="text-xl block float-left ml-5">
                            {menu.src ? menu.src : <AiFillHome />}
                          </span>
                          <span
                            className={`text-sm font-extralight flex-1 duration-200 ml-2 `}
                          >
                            {menu.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-[5%]  w-[85%]">
            <MngHeader />
            <div className="flex-1 p-4 min-h-0 overflow-auto">
              <div className="w-full border h-full shadow-xl rounded-lg bg-white overflow-auto">
                <div className="text-center py-5 mb-10 text-[30px]">
                  <span className="text-center justify-center font-semibold">
                    Access Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MngAccessControl;
