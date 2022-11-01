import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-4  ">
      <div className="container-fluid">
        <div className="row flex-xl-row-reverse">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              <a href="/#" className="font-weight-bold" target="_blank">
                Created by Avi Aman
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-start">
              <li className="nav-item">
                <Link
                  href="/#"
                  className="nav-link text-muted"
                  to={{ pathname: "/" }}
                >
                  עמוד הבית
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/login"
                  className="nav-link text-muted"
                  to={{
                    pathname:
                      "/loginfixed-plugin-button text-dark position-fixed px-3 py-2",
                  }}
                >
                  כניסה
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/register"
                  className="nav-link text-muted"
                  to={{ pathname: "/register" }}
                >
                  הרשמה
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
