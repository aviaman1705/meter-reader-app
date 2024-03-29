import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading left="50%" />;
  } else if (props.list.length === 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }
    return <>אין אלמנטים להצגה</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}
