import React from "react";

const SelectBulkUpload = () => {
  return (
    <div className="h-full flex flex-col gap-4 justify-start bg-gray-200 rounded-xl shadow-xl border-0  2xl:h-full w-full p-2 overflow-auto">
      <h1 className="text-black text-[12px] italic p-2">File Format csv</h1>
      <div className="flex flex-row gap-4">
        <div className="relative w-full">
          <form>
            <label
              htmlFor="fileUpload"
              className="block h-12 w-full pt-3 rounded-sm border-dotted border-2 border-gray-500 bg-transparent text-center mb-2"
            >
              Drop files here
            </label>
            <input
              type="file"
              id="fileUpload"
              multiple
              className=" h-10 w-[40rem]  p-2 text-sm  rounded-sm border border-gray-300 cursor-pointer text-gray-400 focus:outline-none bg-gray-700 hidden placeholder-gray-400"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SelectBulkUpload;
