import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
