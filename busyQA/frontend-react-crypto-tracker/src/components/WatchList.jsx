
// Watchlist.jsx
import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import CryptoCard from './CryptoCard';

const Watchlist = () => {
    //grabbing the watchlist array
    const { watchlist } = useContext(WatchlistContext);
    // return all the crypto cards that were selected when the button was pressed
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Your Watchlist</h1>
            <div className="crypto-container">
                {watchlist.length === 0 ? (
                    <p>Your watchlist is empty</p>
                ) : (
                    watchlist.map((crypto) => (
                        <CryptoCard key={crypto.id} {...crypto} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Watchlist;
