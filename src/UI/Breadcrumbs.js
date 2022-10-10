import * as React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(location.pathname);
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
          <Typography>{name}</Typography>
        ) : (
          <Link onClick={() => navigate(routeTo)} color="inherit">
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
