import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";


const CryptoCard = (props) => {
    const { addToWatchlist } = useContext(WatchlistContext);

    console.log(`card data ${JSON.stringify(props)}`)

    //handles the addition of cryptos to the watchlist page and alerts the user 
    const handleAddWatchList = () => {
        addToWatchlist(props);
        alert(`The Crypto has been added to the Watchlist page!!`);
    }
    // renders all the cryto JSON API data into a neatly organized card structure
    return <>
        <div className="crypto-card">
            <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.id}.png`}
                alt={props.name}
                width="32"
                height="32"/>
            <h2>{props.name}</h2>
            <p>Current Price: ${props.quote.USD.price.toFixed(2)}</p>
            <p>Market Cap: ${props.quote.USD.market_cap.toLocaleString()}</p>
            <p>24h Volume: ${props.quote.USD.volume_24h.toLocaleString()}</p>
            <p>24h Change: {props.quote.USD.percent_change_24h.toFixed(2)}%</p>
            <button style={{height: 40, width:40}}onClick={handleAddWatchList}><i className="fa-solid fa-eye"></i></button>
        </div>
    </>
};
export default CryptoCard;