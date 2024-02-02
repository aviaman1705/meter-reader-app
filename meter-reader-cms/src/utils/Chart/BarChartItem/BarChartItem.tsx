import React, { PureComponent } from "react";
import { monthlyDataDTO } from "../../../home/dashboard.models";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import style from "./BarChartItem.module.css";

export default function BarChartItem(props: BarChartItemProps) {
  return (
    <ResponsiveContainer
      className={style["recharts-responsive-container"]}
      width="100%"
      height={500}
    >
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
        <XAxis dataKey="date" />
        <YAxis domain={[0, 12000]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="unCalled" fill="#cecece" name="לא נקרא" />
        <Bar dataKey="called" fill="#00BCD4" name="נקרא" />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface BarChartItemProps {
  data: monthlyDataDTO[];
}
