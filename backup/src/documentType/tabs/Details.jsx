import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";

const Details = () => {
  return (
    <>
      <div className="flex flex-row gap-4 justify-between w-full h-10 pt-1 px-3 mb-2 bg-gray-300  shadow-md rounded-lg shadow-gray-700/50">
        <div>
          <label className="text-[12px] text-[#367FA9]font-bold">AUSER-3</label>
        </div>
        <div>
          <button
            type="submit"
            id="btnAddchild"
            className=""
            onClick={() => alert("Add Child")}
          >
            <AiOutlineUserAdd
              size={30}
              className="text-[#0972B8] text-[12px]"
            />
          </button>
          <button
            type="submit"
            className=""
            onClick={() => alert("Delete Child")}
          >
            <HiTrash size={30} className="ml-2 text-red-700 text-[12px]" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-start pt-1 px-2 p-4">
        <div className="flex flex-row gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44">
            Parent Document Type
          </span>
          <span className="text-gray-600 text-[11px] font-semibold">
            AUSER-3
          </span>
        </div>
        <div className="flex flex-row  gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44">
            Document Type
          </span>
          <input
            type="text"
            id="docuType"
            value="AUSER-3"
            className="text-gray-600 text-[11px] font-semibold rounded-sm border-[1px] focus:bg-[#3C8DBC] focus:border-gray-700 border-gray-400 outline-0 h-6 px-2"
          />
        </div>
        <div className="flex flex-row  gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44">
            Document Type Name
          </span>
          <input
            type="text"
            id="docuName"
            value="AUSER-3"
            className="text-gray-600 text-[11px] font-semibold rounded-sm border-[1px] focus:bg-[#3C8DBC] focus:border-gray-700 border-gray-400 outline-0 h-6 px-2"
          />
        </div>
        <div className="flex flex-row  gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44 outline-0">
            Owning Manager
          </span>
          <select
            id="owningManager"
            className="text-gray-600 text-[11px] font-semibold h-6 w-44 border-[1px] border-gray-400 outline-0 "
          >
            <option value="1">Jey Maru (nxp34177)</option>
            <option value="2">AUSER-3</option>
            <option value="3">AUSER-3</option>
            <option value="4">AUSER-3</option>
          </select>
        </div>
        <div className="flex flex-row  gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44">
            Change Parent Document Type
          </span>
          <select
            id="changeParent"
            className="text-gray-600 text-[11px] font-semibold h-6 w-44 border-[1px] border-gray-400 outline-0 "
          >
            <option value="1">Parent</option>
            <option value="2">Child</option>
            <option value="3">AUSER-3</option>
            <option value="4">AUSER-3</option>
          </select>
          <button
            type="text"
            id="btnchangeParent"
            className="rounded-2xl w-20 h-6 -ml-3 border-2 border-[#0972B8] bg-[#0972B8] text-white text-[12px]"
          >
            Change
          </button>
        </div>
        <div className="flex flex-row  gap-4">
          <span className="text-gray-600 text-[11px] font-semibold w-44">
            Retention Period
          </span>
          <input
            type="text"
            id="txtRetentionPrd"
            value={5}
            className="text-gray-600 text-[11px] font-semibold h-6 w-16 px-2 border-[1px] outline-0 focus:bg-[#3C8DBC]  focus:border-gray-700 border-gray-400"
          />
          <select
            id="cmbRetentionPrd"
            className="text-gray-600 text-[11px] font-semibold h-6 w-28 -ml-3  border-[1px] border-gray-400 outline-0 "
          >
            <option value="1">years</option>
            <option value="2">months</option>
            <option value="3">days</option>
            <option value="4">hours</option>
          </select>
        </div>
        <div className="flex flex-row gap-4 justify-start">
          <button
            type="text"
            id="btnSaveChanges"
            className="rounded-lg w-[100px] h-8 border-2 border-[#0972B8] bg-[#0972B8] text-white text-[12px]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};
export default Details;
