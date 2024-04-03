import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "./components/auth/handleJWT";
import AuthenticationContext from "./components/auth/AuthenticationContext";
import Authorized from "./components/auth/Authorized";
import { FcElectricity } from "react-icons/fc";

import "./Header.css";

export default function Header() {
  const { update, claims } = useContext(AuthenticationContext);
  // const [username, setUsername] = useState("");

  useEffect(() => {
    // if (claims.find((claim) => claim.name === "username") !== undefined) {
    //   const currentUsername = utf8.decode(
    //     claims.find((claim) => claim.name === "username").value
    //   );
    //   setUsername(`היי ${currentUsername}`);
    // }
  }, [claims]);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" exact={true}>
            <FcElectricity title="מערכת קריאת מונים" />
            מערכת קריאת מונים
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact={true}>
                  עמוד הבית
                </NavLink>
              </li>
              <Authorized
                role="admin"
                authorized={
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/tracks">
                        מסלולים
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/notebooks">
                        פנקסים
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/statistics">
                        סטטיסטיקות
                      </NavLink>
                    </li>
                  </>
                }
              />
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Authorized
                role=""
                authorized={
                  <li className="nav-item">
                    <a
                      id="logout-mobile-btn"
                      className="nav-link"
                      onClick={() => {
                        logout();
                        update([]);
                      }}
                      href="/#"
                    >
                      יציאה
                    </a>
                  </li>
                }
                notAuthorized={
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        כניסה
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">
                        הרשמה
                      </NavLink>
                    </li>
                  </>
                }
              />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
