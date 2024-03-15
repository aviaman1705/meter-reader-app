import { monthlyDataDTO } from "../../../components/home/dashboard.models";
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

import classes from "./BarChartItem.module.css";

export default function BarChartItem(props: BarChartItemProps) {
  return (
    <ResponsiveContainer
      className={classes["recharts-responsive-container"]}
      height={500}
    >
      <BarChart width={500} height={300} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 12000]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="unCalled" fill="#5C8374" name="לא נקרא" />
        <Bar dataKey="called" fill="#1B4242" name="נקרא" />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface BarChartItemProps {
  data: monthlyDataDTO[];
}
