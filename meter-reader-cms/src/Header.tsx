import { useContext, useEffect, useState } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import utf8 from "utf8";
import { NavLink } from "react-router-dom";
import { logout } from "./auth/handleJWT";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { FcElectricity } from "react-icons/fc";
import logo from "./logo.svg";

import "./Header.css";

export default function Header() {
  const { update, claims } = useContext(AuthenticationContext);
  const [expanded, setexpanded] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (claims.find((claim) => claim.name === "username") !== undefined) {
      const currentUsername = utf8.decode(
        claims.find((claim) => claim.name === "username").value
      );

      setUsername(`היי ${currentUsername}`);
    }
  }, [claims]);

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
          <FcElectricity title="מערכת קריאת מונים" />
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
                <NavLink
                  className="nav-link"
                  to="/statistics"
                  onClick={() => setexpanded(false)}
                >
                  סטטיסטיקות
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
                <NavDropdown title={username} id="navbarScrollingDropdown">
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
