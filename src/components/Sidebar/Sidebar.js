import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-end me-3 rotate-caret  bg-gradient-dark"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute start-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link className="navbar-brand m-0" to={{ pathname: "/" }}>
          <img
            src="../assets/img/logo-ct.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="me-1 font-weight-bold text-white">
            מערכת קריאת מונים
          </span>
        </Link>
      </div>
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse px-0 w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link " to={{ pathname: "/" }}>
              <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                <i className="material-icons-round opacity-10">dashboard</i>
              </div>
              <span className="nav-link-text me-1">עמוד הבית</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={{ pathname: "/login" }}>
              <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                <i className="material-icons-round opacity-10">login</i>
              </div>
              <span className="nav-link-text me-1">כניסה</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={{ pathname: "/register" }}>
              <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                <i className="material-icons-round opacity-10">how_to_reg</i>
              </div>
              <span className="nav-link-text me-1">הרשמה</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to={{ pathname: "/logout" }}>
              <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                <i className="material-icons-round opacity-10">logout</i>
              </div>
              <span className="nav-link-text me-1">יציאה</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer position-absolute w-100 bottom-0 "></div>
    </aside>
  );
};

export default Sidebar;
