import React from "react";

const SystemInfo = () => {
  return (
    <div className="h-auto w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-4 duration-100">
      <strong className="text-black font-bold">System Information</strong>
      <table className="mt-3 w-full h-full flex-1">
        <tr>
          <td className="xl:text-sm text-black font-semibold">Host Name</td>
          <td className="xl:text-sm text-black pl-3 pr-3">
            UIC-FG10FTK190022009
          </td>
        </tr>
        <tr>
          <td className="xl:text-sm text-black font-semibold">Serial Number</td>

          <td className="xl:text-sm text-black pl-3 pr-3">FG101FTK19002009</td>
        </tr>
        <tr>
          <td className="xl:text-sm text-black font-semibold">Framework</td>
          <td className="xl:text-sm text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="xl:text-sm text-black font-semibold">System Time</td>
          <td className="xl:text-sm text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="xl:text-sm text-black font-semibold">IP address</td>
          <td className="xl:text-sm text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
        <tr>
          <td className="xl:text-sm text-black font-semibold">Processor</td>
          <td className="xl:text-sm text-black pl-3 pr-3">
            UIC-FG101FTK19002009
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SystemInfo;
