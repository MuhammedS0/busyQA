
import "./styles/cryptoCards.css";
import CryptoDashboard from './components/CryptoDashboard';
import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/WatchList";
import { WatchlistProvider } from "./context/WatchlistContext";


function App() {
  return (
    <>
    <WatchlistProvider>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<CryptoDashboard/>}/>
        <Route path="watchlist" element={<Watchlist/>}/>
        <Route path="*" element={<div>Not Found!</div>}/>
      </Routes>
    </Router>
    </WatchlistProvider>
    </>
  );
}

export default App;
