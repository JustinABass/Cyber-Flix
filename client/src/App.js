import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieProvider } from "./context/movie";
import { ActorProvider } from "./context/actor";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import ActionPage from "./pages/ActionPage";
import ComedyPage from "./pages/ComedyPage";
import RomancePage from "./pages/RomancePage";
import DramaPage from "./pages/DramaPage";
import ThrillerPage from "./pages/ThrillerPage";
import AdventurePage from "./pages/AdventurePage";
import CrimePage from "./pages/CrimePage";
import HorrorPage from "./pages/HorrorPage";
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
                <Route path="/comedy_movies">
                  <ComedyPage/>
                </Route>
                <Route path="/romance_movies">
                  <RomancePage/>
                </Route>
                <Route path="/drama_movies">
                  <DramaPage/>
                </Route>
                <Route path="/thriller_movies">
                  <ThrillerPage/>
                </Route>
                <Route path="/adventure_movies">
                  <AdventurePage/>
                </Route>
                <Route path="/crime_movies">
                  <CrimePage/>
                </Route>
                <Route path="/horror_movies">
                  <HorrorPage/>
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
