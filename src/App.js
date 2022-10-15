import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import SearchResult from "./pages/SearchResult.js";

function App() {
  const sidebarColor = (item) => {
    //console.log(item);
  };

  const sidebarType = (item) => {
    //console.log(item);
  };

  const navbarFixed = (item) => {
    //console.log(item);
  };

  const darkMode = (item) => {
    //console.log(item);
  };

  return (
    <>
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
          <a
            className="navbar-brand m-0"
            href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct.png"
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="me-1 font-weight-bold text-white">
              Material Dashboard 2
            </span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse px-0 w-auto  max-height-vh-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " href="../pages/dashboard.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text me-1">لوحة القيادة</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/tables.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">table_view</i>
                </div>
                <span className="nav-link-text me-1">الجداول</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/billing.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">
                    receipt_long
                  </i>
                </div>
                <span className="nav-link-text me-1">الفواتير</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/virtual-reality.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text me-1">الواقع الافتراضي</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="../pages/rtl.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">
                    format_textdirection_r_to_l
                  </i>
                </div>
                <span className="nav-link-text me-1">RTL</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/notifications.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">notifications</i>
                </div>
                <span className="nav-link-text me-1">إشعارات</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/profile.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">person</i>
                </div>
                <span className="nav-link-text me-1">حساب تعريفي</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-in.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">login</i>
                </div>
                <span className="nav-link-text me-1">تسجيل الدخول</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="../pages/sign-up.html">
                <div className="text-white text-center ms-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons-round opacity-10">assignment</i>
                </div>
                <span className="nav-link-text me-1">اشتراك</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a
              className="btn bg-gradient-primary mt-4 w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              Upgrade to pro
            </a>
          </div>
        </div>
      </aside>
      <Header />
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="material-icons py-2">settings</i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3">
            <div className="float-end">
              <h5 className="mt-3 mb-0">Material UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-start mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="material-icons">clear</i>
              </button>
            </div>
            {/* <!-- End Toggle Button --> */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            {/* <!-- Sidebar Backgrounds --> */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a href="#/" className="switch-trigger background-color">
              <div className="badge-colors my-2 text-end">
                <span
                  className="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onClick={sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onClick={sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onClick={sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onClick={sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onClick={sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onClick={sidebarColor(this)}
                ></span>
              </div>
            </a>
            {/* <!-- Sidenav Type --> */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn bg-gradient-dark px-3 mb-2 active"
                // dataClassName="bg-gradient-dark"
                onClick={sidebarType(this)}
              >
                Dark
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 ms-2"
                // dataClassName="bg-transparent"
                onClick={sidebarType(this)}
              >
                Transparent
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 me-2"
                // dataClassName="bg-white"
                onClick={sidebarType(this)}
              >
                White
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* <!-- Navbar Fixed --> */}
            <div className="mt-3 d-flex">
              <h6 className="mb-0">Navbar Fixed</h6>
              <div className="form-check form-switch me-auto my-auto">
                <input
                  className="form-check-input mt-1 float-end me-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onClick={navbarFixed(this)}
                />
              </div>
            </div>
            <hr className="horizontal dark my-3" />
            <div className="mt-2 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch me-auto my-auto">
                <input
                  className="form-check-input mt-1 float-end me-auto"
                  type="checkbox"
                  id="dark-version"
                  onClick={darkMode(this)}
                />
              </div>
            </div>
            <hr className="horizontal dark my-sm-4" />
            <a className="btn btn-outline-dark w-100" href="">
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/material-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/material-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i
                  className="fab fa-facebook-square me-1"
                  aria-hidden="true"
                ></i>{" "}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
