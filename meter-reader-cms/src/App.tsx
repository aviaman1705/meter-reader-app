import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import routes from "./route-config";
import configureInterceptor from "./utils/httpInterceptors";
import { useEffect, useState } from "react";
import { claim } from "./auth/auth.models";
import { getClaims } from "./auth/handleJWT";
import AuthenticationContext from "./auth/AuthenticationContext";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import Footer from "./Footer";

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
        <Container>
          <Row>
            <Col className="p-0">
              <Header />
              <Container id="main-container">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      exact={route.exact}
                      path={route.path}
                      key={route.path}
                    >
                      {route.isAdmin && !isAdmin() ? (
                        <>You are not allowed to see this page</>
                      ) : (
                        <route.component />
                      )}
                    </Route>
                  ))}
                </Switch>
              </Container>
              <Footer />
            </Col>
          </Row>
        </Container>

        <div className="container"></div>
      </AuthenticationContext.Provider>
    </ThemeProvider>
  );
}

export default App;
