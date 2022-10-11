import * as React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <MUIBreadcrumbs seperator="/" aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => navigate("/")} color="inherit">
          עמוד הבית
        </Link>
      ) : (
        <Typography>עמוד הבית</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography>{decodeURI(name)}</Typography>
        ) : (
          <Link onClick={() => navigate(routeTo)} color="inherit">
            {decodeURI(name)}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
