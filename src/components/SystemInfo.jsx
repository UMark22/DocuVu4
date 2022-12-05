import React from "react";

const SystemInfo = () => {
  return (
    <div className="h-auto w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 duration-100">
      <strong className="text-black font-semibold text-[14px]">
        System Information
      </strong>
      <table className="w-[95%] h-full flex-1">
        <tr>
          <td className="text-[12px] text-black font-semibold">Host Name</td>
          <td className=" text-[12px] text-black pl-3 pr-3">
            UIC-FG10FTK190022009
          </td>
        </tr>
        <tr>
          <td className="text-[12px] text-black font-semibold">
            Serial Number
          </td>

          <td className="text-[12px] text-black pl-3 pr-3">FG101FTK19002009</td>
        </tr>
        <tr>
          <td className="text-[12px] text-black font-semibold">Framework</td>
          <td className="text-[12px] text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="text-[12px] text-black font-semibold">System Time</td>
          <td className="text-[12px] text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="text-[12px] text-black font-semibold">IP address</td>
          <td className="text-[12px] text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="text-[12px] text-black font-semibold">Processor</td>
          <td className="text-[12px] text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SystemInfo;
