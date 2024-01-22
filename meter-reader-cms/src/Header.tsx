import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import AuthenticationContext from "./auth/AuthenticationContext";
import logo from "./logo.svg";
import "./Header.css";

export default function Header() {
  const { update, claims } = useContext(AuthenticationContext);
  const [expanded, setexpanded] = useState(false);
  return (
    <Navbar
      bg="custom"
      variant="dark"
      sticky="top"
      expand="lg"
      dir="rtl"
      collapseOnSelect
      expanded={expanded}
    >
      <Navbar.Brand>
        <NavLink className="nav-link" to="/" exact={true}>
          <img src={logo} width="40px" height="40px" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle
        id="close-button"
        style={{
          background: `url("../../icons/hamburger-icon.svg")`,
          backgroundSize: 28,
          border: "none",
        }}
        aria-controls="navbarScroll"
        onClick={() => setexpanded(expanded ? false : true)}
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0 pe-2"
          style={{ maxHeight: "120px" }}
          navbarScroll
        >
          <NavLink
            className="nav-link"
            to="/"
            exact={true}
            onClick={() => setexpanded(false)}
          >
            עמוד הבית
          </NavLink>
          <Authorized
            role="admin"
            authorized={
              <>
                <NavLink
                  className="nav-link"
                  to="/tracks"
                  onClick={() => setexpanded(false)}
                >
                  מסלולים
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/notebooks"
                  onClick={() => setexpanded(false)}
                >
                  פנקסים
                </NavLink>
              </>
            }
          />
        </Nav>
        <Nav className="d-flex pe-2">
          <Authorized
            role="admin"
            authorized={
              <>
                <NavDropdown title="היי משתמש" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    href="#"
                    onClick={() => {
                      setexpanded(false);
                      logout();
                      update([]);
                    }}
                  >
                    יציאה
                  </NavDropdown.Item>
                </NavDropdown>

                <a
                  id="logout-mobile-btn"
                  onClick={() => {
                    setexpanded(false);
                    logout();
                    update([]);
                  }}
                >
                  יציאה
                </a>
              </>
            }
            notAuthorized={
              <>
                <NavLink
                  className="nav-link"
                  to="/login"
                  onClick={() => setexpanded(false)}
                >
                  כניסה
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/register"
                  onClick={() => setexpanded(false)}
                >
                  הרשמה
                </NavLink>
              </>
            }
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
