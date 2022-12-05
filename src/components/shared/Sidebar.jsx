import React from "react";
import { useState } from "react";
import sideLogo from "./img/DocuVu-C.png";
import loinImg from "./img/DocuVu2.png";
import { AiFillDashboard, AiFillFile, AiFillFolder } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiFiles } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { FaUserAlt, FaRecycle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toOpen, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("");
  const [active, setActive] = useState(null);
  const Menus = [
    {
      title: "Dashboard",
      src: <AiFillDashboard />,
      path: "/dashboard",
      gap: true,
    },
    {
      title: "Documents",
      src: <AiFillFile />,
      path: "/document",

      gap: true,
    },
    {
      title: "Settings",
      src: <FiSettings />,
      gap: true,
      submenu: true,
      subIcon: <BsChevronDown />,
      submenuItems: [
        {
          title: "User",
          src: <FaUserAlt size={15} />,
          path: "/user",
          gap: false,
        },
        {
          title: "Document Type",
          src: <AiFillFolder size={15} />,
          path: "/documentType",
          gap: false,
        },
      ],
    },
    {
      title: "System Report",
      src: <TfiFiles />,
      gap: true,
      submenu: true,
      subIcon: <BsChevronDown />,
      submenuItems: [
        {
          title: "Audit Trail",
          src: <FaUserAlt size={15} />,
          path: "/audittrail",
          gap: false,
        },
        {
          title: "User Access",
          src: <HiUserGroup size={15} />,
          path: "/useraccess",
          gap: false,
        },
        {
          title: "Department Access",
          src: <AiFillFolder size={15} />,
          path: "/departmentaccess",
          gap: false,
        },
        {
          title: "Activity Log",
          src: <AiFillFolder size={15} />,
          path: "/activitylog",
          gap: false,
        },
      ],
    },
    {
      title: "Recycle Bin",
      src: <FaRecycle />,
      path: "/recycleBin",
      gap: true,
    },
  ];
  return (
    <>
      <div className={`bg-[#0972B8] ${!toOpen ? "w-65" : "w-16"} duration-800`}>
        <div
          className={`bg-white p-[0.47rem] flex flex-col relative duration-800`}
        >
          {/* Session for Top part */}
          <div className="flex-none items-center gap-2 px-5 py-5 duration-800">
            <GiHamburgerMenu
              size={25}
              className={`absolute -right-8 top-4 w-7 text-black border border-gray-500 duration-800 cursor-pointer `}
              onClick={() => setOpen(!toOpen)}
            />
            {toOpen ? (
              <img
                src={sideLogo}
                alt="Sample"
                className={`duration-800 absolute cursor-pointer right-3 top-2 h-10 w-9`}
              />
            ) : null}
            {!toOpen ? (
              <img
                src={loinImg}
                alt="Sample"
                className={`duration-800 absolute cursor-pointer ml-5 top-2 h-10 w-[140px]`}
              />
            ) : null}
          </div>
        </div>
        {/* Session for Links */}
        <div className="flex-1">
          <ul>
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`${
                    active === index &&
                    " bg-gray-100 border shadow-md border-gray-200 w-full text-blue-600 rounded-tr-2xl rounded-bl-2xl"
                  } duration-800 text-white flex items-center gap-x-4 cursor-pointer p-2
                                    ${menu.gap ? "mt-6 " : "mt-1"}`}
                  onClick={() => setActive(index)}
                >
                  <Link to={menu?.path} key={index}>
                    <div
                      className={` flex relative duration-800 ${
                        !toOpen ? "w-60" : "w-16"
                      }`}
                    >
                      <span className="text-xl block float-left ml-[13px]">
                        {menu.src}
                      </span>
                      <span
                        className={`text-sm font-extralight flex-1 ml-2 duration-800 ${
                          toOpen && "hidden"
                        } `}
                      >
                        {menu.title}
                      </span>
                      <span
                        className={` float-right ${
                          toOpen ? "m-5" : "mr-5"
                        } text-black text-bold duration-800 absolute ml-[90%] text-[14px]`}
                        onClick={() => {
                          setCurrentMenu(menu.title);
                          setSubmenuOpen(!submenuOpen);
                        }}
                      >
                        {menu.submenu && !toOpen && menu.subIcon}
                      </span>
                    </div>
                  </Link>
                </li>
                {menu.submenu &&
                  submenuOpen &&
                  currentMenu === menu.title &&
                  !toOpen && (
                    <ul className="mt-2">
                      {menu.submenuItems.map((submenuItem, index) => {
                        return (
                          <Link to={submenuItem?.path} key={index}>
                            <li
                              key={index}
                              className={`
                          hover:bg-sky-700 w-full text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5
                          `}
                            >
                              <div className="w-full ">
                                <span
                                  className={`text-md block float-left ml-9 ${
                                    toOpen && "text-md"
                                  } `}
                                >
                                  {submenuItem.src}
                                </span>
                                <span
                                  className={`text-sm font-extralight flex-1 duration-800 ml-2 ${
                                    toOpen && "hidden"
                                  } `}
                                >
                                  {submenuItem.title}
                                </span>
                              </div>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
