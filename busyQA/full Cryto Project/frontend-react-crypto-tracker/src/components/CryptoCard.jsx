import "@fortawesome/fontawesome-free/css/all.min.css";



const CryptoCard = (props) => {
    
    console.log(`card data ${JSON.stringify(props)}`)

    //handles the addition of cryptos to the watchlist page and alerts the user 
    const handleAddWatchList = async () => {
        try {
            const response = await fetch(`http://localhost:3001/watchlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ symbol: props.symbol })
            });
            if (response.ok) {
                alert(`The Crypto has been added to the Watchlist page!`);
            }
        } catch (err) {
            console.log(`Error adding to watchlist: ${err}`);
        }
    };
    
    
    // renders all the cryto JSON API data into a neatly organized card structure
    return <>
        <div className="crypto-card">
            <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.id}.png`}
                alt={props.name}
                width="32"
                height="32"/>
            <h2>{props.name}</h2>
            <p>Current Price: ${props.price.toFixed(2)}</p>
            <p>Market Cap: ${props.marketCap ? props.marketCap.toLocaleString(): "N/A"}</p>
            <p>24h Volume: ${props.volume24h? props.volume24h.toLocaleString(): "N/A"}</p>
            <p>24h Change: {props.change24h.toFixed(2)}%</p>
            <button style={{height: 40, width:40, borderRadius: "5px", backgroundColor: props.isWatched ? "lightgreen" : ""}}
                onClick={handleAddWatchList}>
                <i className="fa-solid fa-eye"></i>
            </button>
        </div>
    </>
};
export default CryptoCard;