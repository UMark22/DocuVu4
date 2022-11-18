import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    usage: 4000,
  },
  {
    name: "Feb",
    usage: 3000,
  },
  {
    name: "March",
    usage: 2000,
  },
  {
    name: "April",
    usage: 2780,
  },
  {
    name: "May",
    usage: 1890,
  },
  {
    name: "June",
    usage: 2390,
  },
  {
    name: "July",
    usage: 4300,
  },
];

const NoUsage = () => {
  return (
    <div className="h-auto w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
      <strong className="text-gray-700 font-medium">No. Usage</strong>
      <div className="mt-3 w-[95%] h-full text-xs duration-100">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#0972B8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default NoUsage;
