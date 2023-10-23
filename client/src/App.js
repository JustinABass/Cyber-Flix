import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieProvider } from "./context/movie";
import { ActorProvider } from "./context/actor";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ActionPage from "./pages/ActionPage";
import ActorPage from "./pages/ActorPage";
import ActorsPage from "./pages/ActorsPage";
import './App.css';

function App() {

  return (
    <MovieProvider>
      <ActorProvider>
          <BrowserRouter>
          <NavBar/>
            <div className="App">
              <Switch>
              <Route path="/movies/:movie_id">
                  <MoviePage/>
                </Route>
                <Route path="/action_movies">
                  <ActionPage/>
                </Route>
                <Route path="/actors/:id">
                  <ActorPage/>
                </Route>
                <Route path="/actors_page">
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
