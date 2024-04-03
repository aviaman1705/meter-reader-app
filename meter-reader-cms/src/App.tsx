import { Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureInterceptor from "./utils/httpInterceptors";
import { useEffect, useState } from "react";
import { claim } from "./components/auth/auth.models";
import { getClaims } from "./components/auth/handleJWT";
import AuthenticationContext from "./components/auth/AuthenticationContext";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Header from "./Header";
import Footer from "./Footer";

import "./App.css";

configureInterceptor();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === "role" && claim.value === "admin"
      ) > -1
    );
  }

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
      dir="rtl"
    >
      <AuthenticationContext.Provider
        value={{ claims: claims, update: setClaims }}
      >
        <div id="main-container" className="container-fluid">
          <Header />
          <div className="content-container">
            <Switch>
              {routes.map((route, index) => (
                <Route exact={route.exact} path={route.path} key={route.path}>
                  {route.isAdmin && !isAdmin() ? (
                    <>You are not allowed to see this page</>
                  ) : (
                    <route.component />
                  )}
                </Route>
              ))}
            </Switch>
          </div>
          <Footer />
        </div>
      </AuthenticationContext.Provider>
    </ThemeProvider>
  );
}

export default App;
