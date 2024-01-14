import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import AuthenticationContext from "./auth/AuthenticationContext";

import "./Header.css";

export default function Header() {
  const { update, claims } = useContext(AuthenticationContext);

  // function getUserEmail(): string {
  //   return claims.filter((x) => x.name === "email")[0]?.value;
  // }

  return (
    <Navbar expand="lg" dir="rtl">
      <Container fluid>
        <h1 id="logo">
          <Navbar.Brand as={Link} to="/">
            קריאת מונים
          </Navbar.Brand>
        </h1>
        <Navbar.Toggle
          style={{
            background: `url("../../icons/hamburger-icon.svg")`,
            backgroundSize: 28,
            border: "none",
          }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Authorized
              role="admin"
              notAuthorized={
                <NavLink className="nav-link" to="/" exact={true}>
                  עמוד הבית
                </NavLink>
              }
              authorized={
                <>
                  <NavLink className="nav-link" to="/tracks">
                    מסלולים
                  </NavLink>
                  <NavLink className="nav-link" to="/notebooks">
                    פנקסים
                  </NavLink>
                </>
              }
            />
          </Nav>
          <Nav className="d-flex">
            <Authorized
              role="admin"
              authorized={
                <>
                  <NavDropdown title="היי משתמש" id="navbarScrollingDropdown">
                    <NavDropdown.Item>
                      <a
                        className="nav-link"
                        onClick={() => {
                          logout();
                          update([]);
                        }}
                      >
                        יציאה
                      </a>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <a
                    id="logout-mobile-btn"
                    onClick={() => {
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
                  <NavLink className="nav-link" to="/login">
                    כניסה
                  </NavLink>
                  <NavLink className="nav-link" to="/register">
                    הרשמה
                  </NavLink>
                </>
              }
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
