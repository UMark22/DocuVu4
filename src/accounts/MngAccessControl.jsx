import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
import Profile from "./users/me.jpg";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
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
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-gray-100">
      <div className="flex flex-row flex-1">
        <div className="mt-[60px] w-[250px] absolute ml-1 left-0 h-[320px] border bg-gray-100 shadow-xm rounded-md">
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
              className={`text-black rounded-tr-2xl rounded-bl-2xl text-sm flex items-center gap-x-4 cursor-pointer p-2
                          ${menu.gap ? "mt-5" : "mt-2"} ${
                menu.color
                  ? "bg-gray-100 border shadow-md border-gray-200 w-[90%] ml-3 text-[#0972B8] "
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
        <div className="flex flex-col flex-1">
          <Header />

          <div className="flex-1 p-4  overflow-hidden ">
            <div className=" flex flex-col w-full h-full">
              <div className="flex-1 p-4 min-h-0 overflow-auto ">
                <div className="  border w-[79%] h-full shadow-xl rounded-xl ml-[250px] bg-white overflow-auto ">
                  <div className="text-center w-full h-full  text-[30px] border mb-10">
                    <div className="text-center py-5 mb-5 text-[30px]">
                      <span className="text-center justify-center font-semibold">
                        Access Control
                      </span>
                    </div>
                    <div className="w-[90%] h-[250px] ml-[60px] mt-10 border border-gray-300 rounded-2xl mb-10">
                      <div className="ml-5 py-4">
                        <span className="text-[20px] "></span>
                      </div>
                      <div className=" flex justify-between w-full h-[60px] border-t border-b border-gray-300 mt-10 cursor-pointer bg-gray-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MngAccessControl;
