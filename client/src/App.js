import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "./context/movie";
import { ActorProvider } from "./context/actor";
import Home from "./pages/Home";
import ActorsPage from "./pages/ActorsPage";
import './App.css';

function App() {

  return (
    <UserProvider>
      <ActorProvider>
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
      </ActorProvider>
    </UserProvider>
  );
}

export default App;
