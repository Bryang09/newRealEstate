import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Search from "./Components/Search/Search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </Switch>
  );
};

export default Routes;
