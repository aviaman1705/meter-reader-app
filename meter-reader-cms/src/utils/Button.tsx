import { Button as Btn } from "react-bootstrap";

export default function Button(props: buttonProps) {
  return (
    <>
      <Btn
        id={props.id}
        type={props.type}
        variant={props.variant}
        className={props.className}
        title={props.title}
        onClick={props.onClick}
      >
        {props.children}
      </Btn>
    </>
  );
}

interface buttonProps {
  id: string;
  className: string;
  variant: string;
  onClick?(): void;
  disabled: boolean;
  children: React.ReactNode;
  type: "button" | "submit";
  title: string;
}

Button.defaultProps = {
  id: "",
  className: "",
  variant: "primary",
  type: "button",
  disabled: false,
  title: "",
};
