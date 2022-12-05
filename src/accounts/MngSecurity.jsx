import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
// import Profile from "./users/me.jpg";
// import { AiOutlineRight } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";

const MngSecurity = () => {
  const navigate = useNavigate();

  const Menus = [
    { title: "Home", path: "/home", gap: true },
    {
      title: "Personal Info",
      src: <BsFillFileEarmarkPersonFill />,
      path: "/personalinfo",
      gap: true,
    },
    {
      title: "Security",
      src: <MdSecurity />,
      path: "",
      gap: true,
      color: true,
    },
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
                <div className="  border w-[79%] h-full shadow-xl rounded-xl ml-[250px] bg-white  ">
                  <div className="text-center w-full h-full  text-[30px] border mb-10">
                    <div className="text-center py-5 mb-5 text-[30px]">
                      <span className="text-center justify-center font-semibold">
                        Security
                      </span>
                    </div>
                    <div className="w-[90%] h-[330px] ml-[60px] mt-1 border border-gray-300 rounded-2xl mb-10 overflow-auto">
                      <div className="ml-5 py-2">
                        <span className="text-[20px] ">Login Activity</span>
                      </div>
                      <div className=" my-1 w-full border border-gray-400 ">
                        <details className="bg-gray-200  duration-300 ">
                          <summary className=" text-left ml-2 py-3 text-sm cursor-pointer">
                            <span className="ml-2">
                              Review your login activity
                            </span>
                          </summary>
                          <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                            <table className="w-full table-collapse">
                              <thead>
                                <tr>
                                  <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
                                    Username
                                  </th>
                                  <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
                                    Date
                                  </th>
                                  <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">
                                    Login
                                  </th>
                                  <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light ">
                                    Logout
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="align-baseline text-left">
                                <tr className="group cursor-pointer hover:bg-grey-lightest ">
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Dang Van Thanh
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Sep, 11 2018
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    2 days ago
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                                    $100.00
                                  </td>
                                </tr>
                                <tr className="group cursor-pointer hover:bg-grey-lightest">
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Hanux Huynh
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Sep, 15 2018
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    6 days ago
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                                    $450.00
                                  </td>
                                </tr>
                                <tr className="group cursor-pointer hover:bg-grey-lightest">
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Hanux Huynh
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Sep, 15 2018
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    6 days ago
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                                    $450.00
                                  </td>
                                </tr>
                                <tr className="group cursor-pointer hover:bg-grey-lightest">
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Hanux Huynh
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    Sep, 15 2018
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                    6 days ago
                                  </td>
                                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                                    $450.00
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </details>
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

export default MngSecurity;
