// import * as React from "react";
// import {
//   Breadcrumbs as MUIBreadcrumbs,
//   Link,
//   Typography,
// } from "@material-ui/core";
// import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  // let location = useLocation();
  // const history = useHistory();

  // const pathnames = location.pathname.split("/").filter((x) => x);

  return null;
  // return (
  //   <MUIBreadcrumbs seperator="/" aria-label="breadcrumb">
  //     {pathnames.length > 0 ? (
  //       <Link onClick={() => history.push("/")} color="inherit">
  //         עמוד הבית
  //       </Link>
  //     ) : (
  //       <Typography>עמוד הבית</Typography>
  //     )}
  //     {pathnames.map((name, index) => {
  //       const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
  //       const isLast = index === pathnames.length - 1;

  //       return isLast ? (
  //         <Typography key={index}>{decodeURI(name)}</Typography>
  //       ) : (
  //         <Link
  //           key={index}
  //           onClick={() => history.push(routeTo)}
  //           color="inherit"
  //         >
  //           {decodeURI(name)}
  //         </Link>
  //       );
  //     })}
  //   </MUIBreadcrumbs>
  // );
}
