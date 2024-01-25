import { Button as Btn } from "rsuite";
import { TypeAttributes } from "rsuite/esm/@types/common";

import classes from "./../Table.module.css";

export default function Button(props: buttonProps) {
  return (
    <Btn
      id={`${classes["system-btn"]}`}
      type={props.type}
      disabled={props.disabled}
      appearance={props.appearance}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Btn>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClick?(): void;
  type: "button" | "submit";
  disabled: boolean;
  className: string;
  appearance: TypeAttributes.Appearance;
  width: string;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary",
  appearance: "primary",
  width: "",
};
