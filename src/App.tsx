import "./App.css";
import React, { useState } from "react";

import "./App.css";
import Header from "./utils/Header";
import Sidebar from "./utils/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarColor = (item: any) => {
    //console.log(item);
  };

  const sidebarType = (item: any) => {
    //console.log(item);
  };

  const navbarFixed = (item: any) => {
    //console.log(item);
  };

  const darkMode = (item: any) => {
    //console.log(item);
  };

  const toggleCard = (event: any) => {
    event.preventDefault();

    setIsOpen((current) => !current);
  };

  return (
    <>
      <Sidebar />
      <Header />
      <div className={isOpen ? "fixed-plugin ps show" : "fixed-plugin ps"}>
        <a
          className="fixed-plugin-button text-dark position-fixed px-3 py-2"
          href="/#"
          onClick={toggleCard}
        >
          <i className="material-icons py-2">settings</i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3">
            <div className="float-end">
              <h5 className="mt-3 mb-0">Material UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-start mt-4">
              <button
                className="btn btn-link text-dark p-0 fixed-plugin-close-button"
                onClick={toggleCard}
              >
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
                  onClick={() => sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onClick={() => sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onClick={() => sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onClick={() => sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onClick={() => sidebarColor(this)}
                ></span>
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onClick={() => sidebarColor(this)}
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
                onClick={() => sidebarType(this)}
              >
                Dark
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 ms-2"
                // dataClassName="bg-transparent"
                onClick={() => sidebarType(this)}
              >
                Transparent
              </button>
              <button
                className="btn bg-gradient-dark px-3 mb-2 me-2"
                // dataClassName="bg-white"
                onClick={() => sidebarType(this)}
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
                  onClick={() => navbarFixed(this)}
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
                  onClick={() => darkMode(this)}
                />
              </div>
            </div>
            <hr className="horizontal dark my-sm-4" />
            <a className="btn btn-outline-dark w-100" href="/#">
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="/#"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/material-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a href="/#" className="btn btn-dark mb-0 me-2" target="_blank">
                <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
              </a>
              <a href="/#" className="btn btn-dark mb-0 me-2" target="_blank">
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
