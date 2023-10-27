import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <NavBar />
            <div className="App">
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/movies/:movie_id" element={ <MoviePage /> } />
                <Route path="/action_movies" element={ <ActionPage />} />
                <Route path="/comedy_movies" element={ <ComedyPage />} />
                <Route path="/romance_movies" element={ <RomancePage />} />
                <Route path="/drama_movies" element={ <DramaPage />} />
                <Route path="/thriller_movies" element={ <ThrillerPage />} />
                <Route path="/adventure_movies" element={ <AdventurePage />} />
                <Route path="/crime_movies" element={ <CrimePage />} />
                <Route path="/horror_movies" element={ <HorrorPage />} />
                <Route path="/actors/:actor_id" element={ <ActorPage />} />
                <Route path="/actors_page" element={ <ActorsPage />} />
              </Routes>
          </div>
        </BrowserRouter>
      </ActorProvider>
    </MovieProvider>
  );
}

export default App;
