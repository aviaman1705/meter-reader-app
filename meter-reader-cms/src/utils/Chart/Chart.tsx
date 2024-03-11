import { useState } from "react";
import { monthlyDataDTO } from "../../components/home/dashboard.models";
import BarChartItem from "./BarChartItem/BarChartItem";

import classes from "./Chart.module.css";

export default function Chart(props: ChartProps) {
  return (
    <div className={classes["panel-container"]}>
      <BarChartItem data={props.data} />
    </div>
  );
}

interface ChartProps {
  data: monthlyDataDTO[];
}
