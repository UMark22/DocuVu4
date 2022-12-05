import React from "react";
import { useState } from "react";
import Details from "./tabs/Details";
import Routing from "./tabs/Routing";
import Index from "./tabs/Index";

const DocuTypeTabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex justify-end">
        <a
          className={
            "w-32 h-10 text-white text-xs font-bold px-2 py-2 shadow-lg rounded block leading-normal bg-[#17203F] " +
            (openTab === 1)
          }
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          data-toggle="tab"
          href="#link1"
          role="tablist"
        >
          Add DocuType
        </a>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-2 list-none flex-wrap flex-row" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gray-400" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Details
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Index
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600 bg-[#0972B8]"
                    : "text-bg-[#0972B8] bg-" + color + "-600")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Routing
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white h-[350px] overflow-auto w-full mb-6 shadow-xl rounded-xl ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={`${openTab === 1 ? "block" : "hidden"}`}
                  id="link1"
                >
                  <Details />
                </div>
                <div
                  className={`${openTab === 2 ? "block" : "hidden"}`}
                  id="link2"
                >
                  <Index />
                </div>
                <div
                  className={`${openTab === 3 ? "block" : "hidden"}`}
                  id="link3"
                >
                  <Routing />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DocuTypeTabs;
