import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
// import MngHeader from "./MngHeader";
import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Header from "../components/shared/Header";

import Profile from "./users/me.jpg";
const Home = () => {
  const navigate = useNavigate();
  const Menus = [
    { title: "Home", path: "/home", gap: true },
    {
      title: "Personal Info",
      src: <BsFillFileEarmarkPersonFill />,
      path: "",
      gap: true,
      color: true,
    },
    { title: "Security", src: <MdSecurity />, path: "/mngsecurity", gap: true },
    {
      title: "Access Control",
      src: <MdPrivacyTip />,
      path: "/accesscontrol",
      gap: true,
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
                        Personal Info
                      </span>
                    </div>
                    <div className="w-[90%] h-[450px] ml-[60px] border border-gray-300 rounded-2xl">
                      <div className="ml-5 py-4">
                        <span className="text-[20px] font-semibold">
                          Basic Info
                        </span>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[90px] border-t border-gray-300 mt-[20px] bg-gray-100 cursor-pointer">
                        <div className="flex-none  px-5 py-7 text-[13px]">
                          Photo
                        </div>
                        <div className="flex-1 px-[130px] py-7 text-[12px] ">
                          Add a photo to personalize your account
                        </div>
                        <div className="flex-none w-32 py-4 text-[20px] -mr-[7%] -mt-1">
                          <img
                            src={Profile}
                            alt=""
                            className="rounded-full w-[60px] "
                          />
                        </div>
                      </div>

                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                        <div className="flex-none  text-left px-5 py-4 text-[13px] w-[25%] ">
                          Name
                        </div>
                        <div className="flex-1 py-4 text-left text-[12px]  ">
                          <span className="ml-[25%]">Jeyllou Maru</span>
                        </div>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                        <div className="flex-none text-left px-5 py-4 text-[13px] w-[25%]">
                          Employee No.
                        </div>
                        <div className="flex-1  text-left  py-4 text-[12px] ">
                          <span className="ml-[25%]">Employee000001</span>
                        </div>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                        <div className="flex-none text-left px-5 py-4 text-[13px] w-[25%]">
                          Department
                        </div>
                        <div className="flex-1  text-left  py-4 text-[12px]">
                          <span className="ml-[25%]">MIS</span>
                        </div>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 ">
                        <div className="flex-none text-left  px-5 py-4 text-[13px] w-[25%]">
                          Document Access
                        </div>
                        <div className="flex-1  text-left  py-4 text-[12px]">
                          <span className="ml-[25%]">All Access</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-[90%] h-[250px] ml-[60px] mt-10 border border-gray-300 rounded-2xl mb-10">
                      <div className="ml-5 py-4">
                        <span className="text-[20px] font-semibold">
                          Contact Info
                        </span>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 mt-10 cursor-pointer">
                        <div className="flex-none  px-5 py-4 text-[13px]">
                          Email
                        </div>
                        <div className="flex-1 px-[130px] py-4 text-[12px] ">
                          JeyllouMaru@gmail.com
                        </div>
                        <div className="flex-none w-32 py-4 text-[20px] -mr-[10%]"></div>
                      </div>
                      <div className=" flex ml-10 w-[90%] h-[60px] border-t border-gray-300 cursor-pointer">
                        <div className="flex-none  px-5 py-4 text-[13px]">
                          Phone
                        </div>
                        <div className="flex-1  px-[120px] py-4 text-[12px] ">
                          +639219278512
                        </div>
                      </div>
                    </div>

                    <div className="w-[45%] h-[250px] ml-[60px] mt-10 border border-gray-300 rounded-2xl mb-5">
                      <div className="ml-5 py-4">
                        <span className="text-[20px] font-semibold">
                          Password
                        </span>
                      </div>
                      <div className=" flex w-[90%] h-[60px]">
                        <span className="text-[13px] ml-5">
                          Secure your password to protect your account.
                        </span>
                      </div>

                      <div className="flex justify-between border border-gray-200 h-[18%] bg-gray-200 cursor-pointer">
                        <div className="ml-5 py-2">
                          <span className="text-[13px] ">
                            Last change Oct 30
                          </span>
                        </div>

                        <div className="text-[23px] py-2 mr-8">
                          <AiOutlineRight />
                        </div>
                      </div>
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

export default Home;
