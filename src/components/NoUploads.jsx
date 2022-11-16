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
    single: 4000,
    bulk: 2400,
  },
  {
    name: "Feb",
    single: 3000,
    bulk: 1398,
  },
  {
    name: "March",
    single: 2000,
    bulk: 9800,
  },
  {
    name: "April",
    single: 2780,
    bulk: 3908,
  },
  {
    name: "May",
    single: 1890,
    bulk: 4800,
  },
  {
    name: "June",
    single: 2390,
    bulk: 3800,
  },
  {
    name: "July",
    single: 3490,
    bulk: 4300,
  },
];

const NoUploads = () => {
  return (
    <div className="h-auto w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
      <strong className="text-gray-700 font-medium">No. of Uploads</strong>
      <div className="mt-3 w-[22rem] h-[20rem] text-xs">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
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
              dataKey="single"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="bulk" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default NoUploads;
