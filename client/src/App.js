import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "./context/movie";
import Home from "./pages/Home";
import ActorsPage from "./pages/ActorsPage";
import './App.css';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path="/actors">
          <ActorsPage/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
