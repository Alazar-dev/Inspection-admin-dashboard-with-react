import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from "./components/pages/auth/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import DashboardPage from "./components/Dashboard";
import SettingsPage from "./components/Settings";
import DriversPage from "./components/Drivers";
import VehiclesPage from "./components/Vehicles"

import User from './components/pages/User';
import Inspect from './components/pages/Inspect';

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
              <Route exact path="/User">
                <User />
              </Route>
              <Route exact path="/Inspect">
                <Inspect />
              </Route>
              <PrivateRoute path="/dashboard">
                  <DashboardPage />
              </PrivateRoute>
              <PrivateRoute path="/drivers">
                  <DriversPage />
              </PrivateRoute>
              <PrivateRoute path="/vehicles">
                  <VehiclesPage />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                  <SettingsPage />
              </PrivateRoute>
              
          </Switch>
      </BrowserRouter>
  );
}

export default App;
