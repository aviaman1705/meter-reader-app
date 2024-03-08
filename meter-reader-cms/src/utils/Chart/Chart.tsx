import { useState } from "react";
import { monthlyDataDTO } from "../../components/home/dashboard.models";
import BarChartItem from "./BarChartItem/BarChartItem";

export default function Chart(props: ChartProps) {
  return (
    <div className="row">
      <BarChartItem data={props.data} />
    </div>
  );
}

interface ChartProps {
  data: monthlyDataDTO[];
}
