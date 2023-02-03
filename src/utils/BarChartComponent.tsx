import React from "react";
import { useState } from "react";
import "./BarChartComponent.css";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
//   {
//     month: "12/22",
//     called: 4000,
//     uncalled: 2400,
//   },
// ];

export default function BarChartComponent<T>(props: barChartEntityProps<T>) {
  const [data, setData] = useState<T[]>();
  const demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  return (
    <>
      <ResponsiveContainer id="bar-chart-container">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" domain={[0, 10000]} />
          <Tooltip />
          {/* <Legend /> */}

          {props.dataKeys.map((dataKey, index) => (
            <Bar
              dataKey={dataKey.dataKey}
              fill={dataKey.fill}
              name={dataKey.name}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

interface barChartEntityProps<T> {
  data: T[];
  dataKeys: dataKeyItem[];
}

interface dataKeyItem {
  dataKey: string;
  fill: string;
  name: string;
}
