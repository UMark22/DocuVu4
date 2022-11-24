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
    uploads: 4000,
  },
  {
    name: "Feb",
    uploads: 3000,
    bulk: 1398,
  },
  {
    name: "March",
    uploads: 2000,
  },
  {
    name: "April",
    uploads: 2780,
  },
  {
    name: "May",
    uploads: 1890,
  },
  {
    name: "June",
    uploads: 2390,
  },
  {
    name: "July",
    uploads: 3490,
  },
];

const NoUploads = () => {
  return (
    <div className="h-auto w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
      <strong className="text-gray-700 font-semibold text-[14px]">
        No. of Uploads
      </strong>
      <div className="mt-3 w-[95%] h-full text-xs">
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
              dataKey="uploads"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default NoUploads;
