import * as React from "react";
import { FC } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import './App.scss'

type AppProps = {};

const routeComponent = routes().map<any>(
  ({ path, exact, component: Component }) => (
    <Route
      key={path}
      path={path}
      exact={exact}
      render={(props: any) => <Component {...props} />}
    />
  )
);

const App: FC<AppProps> = () => {
  return (
    <>
      <Router>
        <Switch>{routeComponent}</Switch>
      </Router>
    </>
  );
};

export default App;
