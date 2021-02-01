import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from "./components/pages/auth/Login";
import PrivateLayout from "./layouts/PrivateLayout";
import DashboardPage from "./components/pages/Dashboard";
import SettingsPage from "./components/pages/Settings";
import DriversPage from "./components/pages/Drivers";
import VehiclesPage from "./components/pages/Vehicles"

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
              <PrivateRoute exact path="/User">
                <User />
              </PrivateRoute>
              <PrivateRoute exact path="/Inspect">
                <Inspect />
              </PrivateRoute>
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
