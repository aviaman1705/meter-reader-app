import classes from "./Panel.module.css";

export default function PanelItem(props: panelItemlProps) {
  return (
    <div className={classes["panel-item"]}>
      <div className={classes["right"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={classes["icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
        <p className={classes["text"]}>{props.header}</p>
      </div>
      <div className={classes["left"]}>
        <p className={classes["amount"]}>{props.text}</p>
      </div>
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
