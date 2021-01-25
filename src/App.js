import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from "./pages/auth/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import DashboardPage from "./pages/Dashboard";
import SettingsPage from "./pages/Settings";
import DriversPage from "./pages/Drivers";
import VehiclesPage from "./pages/Vehicles"

function PrivateRoute({ children, ...rest }) {
  return (
      <Route
          {...rest}
          render={({ location }) =>
              localStorage.getItem('token') ? (
                  <PrivateLayout>{children}</PrivateLayout>
              ) : (
                  <Redirect
                      to={{
                        pathname: '/',
                        state: { from: location },
                      }}
                  />
              )
          }
      />
  );
}

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <LoginPage />
              </Route>
              <PrivateRoute path="/dashboard">
                  <DashboardPage />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                  <SettingsPage />
              </PrivateRoute>
              <PrivateRoute path="/drivers">
                  <DriversPage />
              </PrivateRoute>
              <PrivateRoute path="/vehicles">
                  <VehiclesPage />
              </PrivateRoute>
              
          </Switch>
      </BrowserRouter>
  );
}

export default App;
