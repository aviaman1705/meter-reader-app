import { Panel, Placeholder } from "rsuite";

import classes from "./Panel.module.css";

export default function PanelItem(props: panelItemlProps) {
  return (
    <div className={`card ${classes["card"]}`}>
      <Panel header={props.header}>
        <h2>{props.text}</h2>
        <Placeholder.Paragraph />
      </Panel>
    </div>
  );
}

interface panelItemlProps {
  onClick?(): void;
  header: string;
  text: string;
}

PanelItem.defaultProps = {
  header: "",
};
