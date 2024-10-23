import React, { createContext, useState } from 'react';

// Create a context
const WatchlistContext = createContext();

// Create a provider component
const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (item) => {
        setWatchlist((prevList) => [...prevList, item]);
    };

    const removeFromWatchlist = (symbol) => {
        setWatchlist((prevList) => prevList.filter((item) => item.symbol !== symbol));
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
};

export { WatchlistContext, WatchlistProvider };
