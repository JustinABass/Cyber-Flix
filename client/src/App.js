import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieProvider } from "./context/movie";
import { ActorProvider } from "./context/actor";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import ActorsPage from "./pages/ActorsPage";
import './App.css';

function App() {

  return (
    <MovieProvider>
      <ActorProvider>
          <BrowserRouter>
            <div className="App">
              <Switch>
              <Route path="/movies/:movie_id">
                  <MoviePage/>
                </Route>
                <Route path="/actors/:id">
                  <ActorPage/>
                </Route>
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
    </MovieProvider>
  );
}

export default App;
