// WatchlistContext.js
import React, { createContext, useState } from 'react';

// create object that will carry global state
export const WatchlistContext = createContext();

// component to wrap parts of the app that the watchlist needs
export const WatchlistProvider = ({ children }) => {
    // state variable storing list of selected cryptos
    // also setWatch updates teh watchlist state
    const [watchlist, setWatchlist] = useState([]);

    // function that adds selected crypto to watchlist
    const addToWatchlist = (crypto) => {
        setWatchlist((prevWatchlist) => [...prevWatchlist, crypto]);
    };

    return (
        // provides the watchlist data to its children
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
};
