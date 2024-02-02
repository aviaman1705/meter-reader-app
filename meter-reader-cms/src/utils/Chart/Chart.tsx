import { useState } from "react";
import { monthlyDataDTO } from "../../home/dashboard.models";
import BarChartItem from "./BarChartItem/BarChartItem";

export default function Chart(props: ChartProps) {
  return (
    <>
      <BarChartItem data={props.data} />
    </>
  );
}

interface ChartProps {
  data: monthlyDataDTO[];
}
