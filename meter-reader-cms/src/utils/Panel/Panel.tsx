import { dashboardSummaryDTO } from "../../home/dashboard.models";
import PanelItem from "./PanelItem";

import classes from "./Panel.module.css";

export default function Panel(props: panelProps) {
  return (
    <div className="row">
      <h1 id={classes["panel-page-title"]}>נתוני קריאות</h1>
      <div className="col-4">
        <PanelItem
          header="מונים שנקראו החודש"
          text={props.data.monthlyCalled.toString()}
        />
      </div>
      <div className="col-4">
        <PanelItem
          header="מונים שלא שנקראו החודש"
          text={props.data.monthlyUnCalled.toString()}
        />
      </div>
      <div className="col-4">
        <PanelItem
          header="אחוזי אי קריאה החודש"
          text={`${props.data.monthlyUncalledPercentage}%`}
        />
      </div>
      <div className="col-4">
        <PanelItem
          header='סה"כ מונים שנקראו'
          text={props.data.called.toString()}
        />
      </div>
      <div className="col-4">
        <PanelItem
          header='סה"כ מונים שלא שנקראו'
          text={props.data.unCalled.toString()}
        />
      </div>
      <div className="col-4">
        <PanelItem
          header='סה"כ אחוזי אי קריאה'
          text={`${props.data.totalUncalledPercentage}%`}
        />
      </div>
    </div>
  );
}

interface panelProps {
  data: dashboardSummaryDTO;
}
